FROM node:22-alpine

COPY package.json /app/project-1
COPY src /app/project-1

WORKDIR /app/project-1

RUN npm install

CMD ["node", "server.js"]