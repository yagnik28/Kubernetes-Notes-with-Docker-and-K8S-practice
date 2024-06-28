FROM node:22-alpine

COPY package.json /app/project-2/
COPY src /app/project-2/

WORKDIR /app/project-2/

RUN npm install

CMD ["node", "server.js"]