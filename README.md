# Docker igloo-amaging

### Build

```
sh ./scripts/build.sh
```
OR
```
npm install
docker build -t amaging .
```

### Run

```
sh ./scripts/run.sh
```
OR
```
docker run -d -v \
  `pwd`/data:/data \
  --net="host" \
  --name=amaging \
  amaging
```

### Env

- `PORT`: Default `3333`
- `CID`: Default `user`
- `KEY`: Default `key`
- `SECRET`: Default `secret`
