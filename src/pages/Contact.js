import './contact.css';

function Contact() {
    return (
        <div className='ContactWrapper'>
            <div className='gridLeft'>
                <div className="Hours">
                    <div>
                        <h3>Hours:</h3>
                    </div>
                    <div>
                        <p className='content'>Monday-Thursday: 10am-8pm</p>
                        <p className='content'>Friday-Saturday: 10am-9pm</p>
                        <p className='content'>Sunday: 11am-6pm</p>
                        <p className='content'>Sunday: CLOSED</p>
                    </div>
                </div>
                <div className="Address">
                    <div>
                        <h3>Address:</h3>
                    </div>
                    <div>
                        <p className='content'>205 Humber College Blvd</p>
                        <p className='content'>Etobicoke, ON</p>
                        <p className='content'>M9W 5L7</p>
                        <p className='content'>Canada</p>
                    </div>
                </div>
                <div className="Contact">
                    <div>
                        <h3>Contact:</h3>
                    </div>
                    <div>
                        <p className='content'>(437)583-8942</p>
                    </div>
                </div>
                <div className="Direction">
                    {/* <a href="https://maps.app.goo.gl/PmJh7dzEW4Ru5jUJ7" className='DirectionLink'>DIRECTIONS</a> */}
                    <br></br>
                    <iframe
                        className="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.139198232833!2d-79.6067803!3d43.728435100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bad3d591c2d%3A0x59d1e4ec03169945!2s205%20Humber%20College%20Blvd%2C%20Etobicoke%2C%20ON%20M9W%205L7!5e0!3m2!1sen!2sca!4v1712284168836!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className='gridRight'>
                <form action="">
                    <h2>Contact Us</h2>
                    <div className='nameField'>
                        <label htmlFor="name">Name <span style={{ color: 'red' }}>* </span> </label>
                        <input type="text" id="name" required />
                    </div>
                    <div className='emailField'>
                        <label htmlFor="email">Email <span style={{ color: 'red' }}>* </span></label>
                        <input type="text" id="email" placeholder="example@example.com" required />
                    </div>
                    <div className='phoneField'>
                        <label htmlFor="phone">Phone </label>
                        <input type="text" id="phone" placeholder="(000) 000-0000" />
                    </div>
                    <div className='messageField'>
                        <label htmlFor="message">Message <span style={{ color: 'red' }}>* </span></label>
                        <input type="text" id="message" required />
                    </div>
                    <button type="submit">Submit</button>
                    <br /><br /><br />
                </form>
            </div>
        </div >
    );
}

export default Contact;