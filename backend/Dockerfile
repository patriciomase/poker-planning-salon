FROM node:latest

RUN mkdir /application

RUN npm install nodemon -g

WORKDIR /application
ADD ./application/package.json /application/package.json
ADD ./application/nodemon.json /application/nodemon.json

WORKDIR /application
RUN npm install

EXPOSE 30003

CMD npm run debug /application/src/app.js
