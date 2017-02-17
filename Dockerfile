FROM node:6

ENV PORT=3333
ENV INDOCKER=true

WORKDIR /app

# dependencies imagemagick graphicsmagick
RUN apt-get -qq update
RUN apt-get -qq install -y imagemagick graphicsmagick

ADD app.js .
ADD node_modules node_modules
ADD package.json .

VOLUME /data
EXPOSE 3333

CMD node /app
