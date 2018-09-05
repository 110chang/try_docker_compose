FROM node:8
WORKDIR /app/src
COPY package.json ./package.json
RUN npm install
COPY . ./
RUN npm run build
#RUN pwd

ENTRYPOINT npm start
