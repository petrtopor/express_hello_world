FROM node:6-alpine
COPY *.js ./
COPY *.json ./
RUN npm install
CMD ["node", "server.js"]