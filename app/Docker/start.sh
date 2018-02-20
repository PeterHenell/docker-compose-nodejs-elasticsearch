#!/bin/bash
if [ -z "$NODE_ENV" ]; then
    export NODE_ENV=development
fi
cd /var/www/example.com/api
npm install
cd /var/www/example.com/api/generated
pm2 start -x index.js --name="app" --no-daemon --watch
