FROM node:22-alpine

WORKDIR /Brainly-Client

COPY package.json .

RUN npm install

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD [ "npm", "run", "dev"]