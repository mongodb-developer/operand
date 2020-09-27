#!/bin/sh
source .env
stitch-cli export --app-id ${STITCH_APPID} --include-hosting -o ./operand
