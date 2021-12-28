FROM golang:1.17.4-alpine
ARG HOST_UID
ARG HOST_GID
ENV GOCACHE=/tmp/.cache \
    USER=$HOST_UID:$HOST_GID \
    CGO_ENABLED=0
RUN addgroup -g $HOST_GID host \
    && adduser -u $HOST_UID -G host -s /bin/sh -D host \
    && mkdir -p /rl-human-prefs-api \
    && chown $USER /rl-human-prefs-api
USER $USER
WORKDIR /rl-human-prefs-api
COPY --chown=$USER go.mod go.sum ./
RUN go mod download
COPY --chown=$USER . ./

EXPOSE 8081
CMD ["go", "run", "./cmd/rl-human-prefs-api", "serve"]
