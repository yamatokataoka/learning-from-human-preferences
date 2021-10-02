FROM node:14.17.6-alpine
ARG USER
USER $USER
WORKDIR /rl-human-prefs-ui
COPY --chown=$USER package.json yarn.lock ./
RUN yarn install
COPY --chown=$USER . /rl-human-prefs-ui
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]