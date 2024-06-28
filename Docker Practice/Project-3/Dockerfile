FROM node:22-alpine

COPY package.json /app/project-3/
COPY src /app/project-3/

WORKDIR /app/project-3/

RUN npm install

CMD ["node", "server.js"]