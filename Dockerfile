# Stage 1: Build React App
FROM node:16-alpine AS build
WORKDIR /final-Project
COPY /finalproject ./finalproject

# Define environment variables here
ENV REACT_APP_BACKEND_URL=http://backend:4100 

RUN cd finalproject && \
    npm install && \
    npm install react-icons &&\
    npm install axios &&\
    npm install react-typewriter-effect &&\
    npm install typewriter-effect &&\
    npm install react-router-dom &&\
    npm run build 

# Stage 2: Serve React App
FROM nginx:alpine
COPY --from=build /final-Project/finalproject/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/conf.d /etc/nginx/conf.d/

# Install Supervisor
RUN apk add --no-cache supervisor

# Copy Supervisor configuration
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose port 80
EXPOSE 3000


# Start Supervisor to manage services
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]