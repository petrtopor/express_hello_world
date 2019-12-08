FROM node:6-alpine
COPY hello.js /app/
CMD ["node", "/app/hello.js"]