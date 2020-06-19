FROM node:alpine

COPY ./package*.json /app/
WORKDIR /app

RUN npm install --production

COPY . /app

CMD npm run start
