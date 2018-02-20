# docker-compose-nodejs-elasticsearch
Tiny working example of using docker compose for running node.js connected to elasticsearch

This is inteded for development environments where the source code will change frequently.

# Features
 * Uses pm2 which will autorestart the node.js application when files are modified
 * Mounts the source directories so that they can be modifed from the outside
 * The combination of this makes it ideal for development but probably not for production.

# Requirements
 * Docker
 * Docker Compose

Tested on Ubuntu 16

# How to
 * Start web server and elasticsearch ```docker-compose-up```
 * Stop all ```docker-compose down```

If you modify the Dockerfiles or the composure then you need to rebuild the images using
```
docker-compose build
```
