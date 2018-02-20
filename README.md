# docker-compose-nodejs-elasticsearch
Tiny working example of using docker compose for running node.js connected to elasticsearch

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
