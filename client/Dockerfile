FROM node:8
COPY package.json package.json
RUN npm install
COPY . ./
RUN npm run build
#RUN pwd

ENTRYPOINT npm start
