FROM node:lts-alpine

WORKDIR . /app

COPY package*.json ./
RUN npm i -g @vue/cli
# RUN npm i -g @vue/cli-service-global
RUN npm install

COPY . .

EXPOSE 3000

# CMD [ "vue", "serve"]
CMD [ "npm", "run", "serve" ]