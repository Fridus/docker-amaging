
docker run -d -v `pwd`/data:/data -p 3333:3333 -e "DEBUG=*" --name=amaging amaging:0.1.5
