## Some usefule commands


## Basic

  docker build -t portal-image .
  docker run -d -p 3000:3000 --name portal-container portal-image

  docker ps
  docker image ls

  docker stop portal-container
  docker rm portal-container -f

### Using docker-compose

  docker-compose up -d
  docker-compose down

### For installing docker using script

  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh


