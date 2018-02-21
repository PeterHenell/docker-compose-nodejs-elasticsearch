FROM node:carbon

RUN npm install -g swagger
#RUN swagger project create 

ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]


