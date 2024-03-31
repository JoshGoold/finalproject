
const session = require("express-session")
const cookieParser = require("cookie-parser")
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs")
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAi = require('openai')
const app = express();


const salt = 10;
const apiKey = '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';
const openai = new OpenAi({
    apiKey: apiKey
})

//setting up operating environment
app.use(bodyParser.json())
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());
app.use(session({
    secret: 'secret', // secret key used to encrypt the session cookie
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
        //set session cookie properties
    }
}))

//connecting to database
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "fake", 
    port: "3308",
})

//tells which port to operate through
app.listen(4100, ()=>{
    console.log("listening")
})


//grabbing all user data in database
app.get('/user', (req,res)=>{
    const sql = "SELECT * from user"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

//registering user information to database
app.post('/register', (req, res)=>{ 
    const user="insert into user (username, email, password) values (?,?,?)"
    const password = req.body.password;
    bcrypt.hash(password.toString(), salt, (err, hash)=>{
        if(err){
            console.log(err)
        }
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        
        db.query(user, [username, email, password], (err, result)=>{
        if(result){
            res.send(result)
        } else{
            res.send({message: "Enter correct details"})
        }
    })
    })

    // //hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

   
    
})

//retrieving info from database to handle login
app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user="select * from user where username = ? and password = ?"
    db.query(user, [username, password], (err, result)=>{
        if(err){
            req.setEncoding({err: err})
        } else{
            if(result.length > 0){
                req.session.username = result[0].username;
                console.log(req.session.username)
                res.json({Login: true});
            } else{
                res.json({Login: false})
            }
        }
    })
})

//change password
app.post('/changepass', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const change = "UPDATE user SET password = ? WHERE email = ?"
    db.query(change, [password, email], (err, result)=>{
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            if (result.affectedRows > 0) {
                res.send({ message: "Password updated successfully" });
            } else {
                res.send({ message: "User not found or no changes made" });
            }
        }
    })
})


//fetching user info through session cookies
app.get('/',  (req,res)=>{
    if(req.session.username){
        return res.json({valid: true, username: req.session.username})
    } else {
        return res.json({valid: false})
    }
})

// Server-side logout endpoint
app.post('/logout', (req, res) => {
    // Destroy the session, which will clear the session cookie
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Error logging out');
        } else {
            res.clearCookie('connect.sid')
            // Respond with a success message or any desired response
            res.send({ Message: 'Success' });
        }
    });
});

app.post("/chat-completion", (req,res)=>{
    const userQuestion = req.body.userQuestion;
    if(userQuestion.length > 0){
        askGPT(userQuestion)
        return res.status(200).json({valid: true, Message: `${answer}`})
    } else{
        return res.status(404).json({valid: false, Message: "System error, please try again"})
    }
})
let answer = "";
async function askGPT(userQuestion){
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{"role": "user", "content": `${userQuestion}`}]
    })
    console.log(chatCompletion.choices[0].message.content)
    answer = chatCompletion.choices[0].message.content;
}
