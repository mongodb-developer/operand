#!/bin/sh
source .env
echo stitch-cli import --path ./operand --strategy merge --app-id ${STITCH_APPID}
stitch-cli import --path ./operand --strategy merge --app-id ${STITCH_APPID} --project-id 5f6d2280df9448778632ba46
