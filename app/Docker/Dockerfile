FROM node:carbon

RUN npm install pm2 -g

ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]


