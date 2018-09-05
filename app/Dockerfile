FROM node:8
RUN npm install -g redis socket.io
ENV NODE_PATH  /usr/local/lib/node_modules

ENTRYPOINT ["node", "app.js"]
