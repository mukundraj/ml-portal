## Some useful commands


## Basic

```
  docker build -t portal-image .
  docker run -d -p 3000:3000 --name portal-container portal-image

  docker ps
  docker ps -a // shows all containers - running and stopped
  docker image ls
  docker image remove portal-image

  docker stop portal-container
  docker rm portal-container -f
  
```

### Using docker-compose

```
  sudo apt install docker-compose
  docker-compose up -d
  docker-compose down
```

### For installing docker using script
```
  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh
```


### More commands to build and run custom named Dockerfile 
```
docker build -f Dockerfile.prod -t portal-image-prod .

### No cache option
docker build -f Dockerfile.prod -t portal-image-prod .
```

### Run on nginx server on docker

```
docker run -d -p 8080:80 --name portal-container-prod portal-image-prod

```

### Docker-compose scripts for  dev and production setups
```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

docker-compose stop
docker-compose start

// for development server
localhost:3000

// for production server
localhost:8080

```

### Stop and remove whole stack(containers, networks, volumes, images) before rebuilding if anything changes in dockerfiles (reverses up)
```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down

```

### Steps to pull in changes in @macoskolab/vitessce

- Push changes in @macoskolab/vitessce to npm repo with updated version number
  - Remember to run before publishing: export NODE_OPTIONS=--max_old_space_size=4096
- In this git repo's package.json, update @macoskolab/vitessce version, commit, and push
- Run `npm install` and `npm start` to test locally
- Build Docker image from scratch to test on docker container
