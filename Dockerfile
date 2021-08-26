FROM node:14

EXPOSE 8001

WORKDIR /.

COPY package*.json ./

COPY . .

RUN npm i

CMD node app.js