#!/usr/bin/env bash
set -ex

export USER=$(id -u):$(id -g)

docker-compose --file docker-compose-dev.yml $*