FROM node:10

ENV PORT=8080
ENV INDOCKER=true

WORKDIR /app

# dependencies imagemagick graphicsmagick
RUN apt-get -qq update && apt-get -qq install -y imagemagick graphicsmagick
ADD package.json package-lock.json app.js /app/
RUN npm ci

VOLUME /data

CMD node /app
