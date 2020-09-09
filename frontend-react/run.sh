#!/bin/bash
echo "Executing docker on port 3001"
docker run -it --rm -v ${pwd}:/frontend-react -v /frontend-react/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true keipertipster-frontend-react:dev