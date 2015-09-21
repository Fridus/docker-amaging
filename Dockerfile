FROM phusion/baseimage
ENV PORT=3333
ENV INDOCKER=true

WORKDIR /src

# dependencies imagemagick graphicsmagick
RUN apt-get update
RUN apt-get install -y nodejs imagemagick graphicsmagick
RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD . .
EXPOSE 3333
CMD ["node", "app.js"]
