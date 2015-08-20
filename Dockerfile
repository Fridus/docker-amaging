FROM mhart/alpine-node
WORKDIR /src
ADD . .
CMD ["node", "app.js"]
