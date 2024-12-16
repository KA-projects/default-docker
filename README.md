# Deploy project
- install docker
- run `docker compose build`
- run `docker compose up`

`docker-compose.yml` has volumes for root directories, with the exception of node_modules. So you can use a different version of the nodeJS. Or you can use `.dockerignore` to exclude the `node_modules` directory while mapping a volume