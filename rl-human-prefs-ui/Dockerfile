FROM node:14.17.6-alpine
ARG HOST_UID
ARG HOST_GID
ENV USER $HOST_UID:$HOST_GID

RUN deluser --remove-home node \
    && addgroup -g $HOST_GID host \
    && adduser -u $HOST_UID -G host -s /bin/sh -D host \
    && mkdir -p /rl-human-prefs-ui \
    && chown $USER /rl-human-prefs-ui
RUN yarn config set prefix ~/.yarn
USER $USER
WORKDIR /rl-human-prefs-ui
COPY --chown=$USER package.json yarn.lock ./
RUN yarn install
COPY --chown=$USER . ./

EXPOSE 8080
CMD ["yarn", "start"]
