#!/bin/sh
source .env.prod
mongo {$MONGODB_URI}
