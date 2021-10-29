FROM node:14.17.6-alpine
ARG HOST_UID
ARG HOST_GID
ENV USER $HOST_UID:$HOST_GID
RUN adduser -D -u $HOST_UID host
ENV HOME /home/host
RUN yarn config set prefix ~/.yarn
USER $USER
WORKDIR /rl-human-prefs-ui
COPY --chown=$USER package.json yarn.lock ./
RUN yarn install
COPY --chown=$USER . ./
EXPOSE 8080
ENTRYPOINT ["yarn", "start"]