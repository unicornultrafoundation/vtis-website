FROM node:23.1.0-alpine3.19

RUN apk update && \
    apk add git

#RUN npm -g install serve
WORKDIR /app
COPY package*.json ./
#RUN npm i --legacy-peer-deps
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "start"]
