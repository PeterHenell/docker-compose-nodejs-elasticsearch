FROM node:carbon

RUN npm install pm2 -g

VOLUME ["/var/www/example.com/api"]
ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]


