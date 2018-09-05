# Docker Amaging

### Build

```sh
npm install
docker build -t amaging .
```

### Run

```sh
docker run -d -v \
  `pwd`/data:/data \
  --name=amaging \
  amaging
```

### Env

- Local only
  - `PORT`: Default `8080`
  - `CID`: Default `user`
  - `KEY`: Default `key`
  - `SECRET`: Default `secret`
- Amaging customers config
  - `customers`
