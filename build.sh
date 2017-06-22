#!/bin/sh
docker build -t arashcuzi/dashboard-client-build . -f Dockerfile.build
docker create --name extract arashcuzi/dashboard-client-build /bin/sh
docker cp extract:/app/build temp-app
docker rm -f extract
docker build --no-cache -t arashcuzi/dashboard-client .
rm -rf temp-app
docker push arashcuzi/dashboard-client
