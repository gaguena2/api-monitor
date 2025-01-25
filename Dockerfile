FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

ENTRYPOINT ["node", "src/app/index.js"]