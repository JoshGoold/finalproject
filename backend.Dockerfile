
FROM node:16-alpine AS backend
WORKDIR /final-Project
COPY  /finalproject ./finalproject/backend

ENV API_KEY='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' ASSISTANT_ID='asst_dqxcQ1ldSkDBfccq6VSfYzx1'

RUN npm install body-parser cookie-parser cors dotenv express express-session mysql2 nodemon openai 

EXPOSE 4100

CMD [ "node", "server.js" ] 