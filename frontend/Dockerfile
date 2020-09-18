FROM node:lts-alpine

WORKDIR . /app

COPY package*.json ./
RUN npm i -g @quasar/cli
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npx", "quasar", "dev" ]