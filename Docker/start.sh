#!/bin/bash
if [ -z "$NODE_ENV" ]; then
    export NODE_ENV=development
fi
cd /var/www/example.com/
npm install
swagger project verify docker-compose-nodejs-elastic & swagger project start docker-compose-nodejs-elastic
