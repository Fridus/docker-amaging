FROM phusion/baseimage
ENV PORT=3333
ENV INDOCKER=true

WORKDIR /src

# dependencies imagemagick graphicsmagick
RUN apt-get -qq update
RUN apt-get -qq install -y nodejs imagemagick graphicsmagick
RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD . .
EXPOSE 3333
CMD ["node", "app.js"]
