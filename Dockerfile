# Dockerfile
# Pull the base image
FROM node:19.7.0-alpine
# Set the working directory
WORKDIR /online-id
# Copy app dependencies to container
COPY ./package*.json ./
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN npm install
# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true