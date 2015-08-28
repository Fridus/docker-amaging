FROM mhart/alpine-node
ENV PORT=3333
ENV INDOCKER=true
WORKDIR /src
ADD . .
EXPOSE 3333
CMD ["node", "app.js"]
