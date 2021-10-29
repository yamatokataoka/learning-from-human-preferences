#!/usr/bin/env bash
set -ex

export HOST_UID=$(id -u)
export HOST_GID=$(id -g)

docker-compose --file docker-compose-dev.yml $*