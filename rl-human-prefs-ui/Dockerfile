FROM node:14.17.6-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]