Ensure you are in master branch
Download the code into local machine
Extarct the zip file
open VS Code and open the downloaded folder 

Setting up the development environment:
  Downlaod and install Node.js, which indeed include npm

  Ensure you are in master branch, then download the code into local machine
  Extarct the zip file
  Open VS Code and open the downloaded folder 
  Execute the following commands in terminal:
  npm init -y #initialize npm
  npm install express #install express
  Initialized git using git init #initialize git

Building docker images:
  Execute following commands in terminal:
    docker login
  #to build the docker images of both microservices
    docker build -t hello:latest -f Dockerfile.hello .
    docker build -t world:latest -f Dockerfile.world .
  #tag and push the images to Docke rhub
    docker tag hello:latest harshakata/hello:latest  #harshakata is my dockerhub username docker tag hello:latest harshakata/hello:latest
    docker tag world:latest harshakata/world:latest
    docker push harshakata/hello:latest
    docker push harshakata/world:latest
  #run services locally
    docker run -p 3000:3000 harshakata/hello    #will return url http://localhost:3000.. add /hello to get the response hello
    docker run -p 3001:3001 harshakata/world    #will return url http://localhost:3001.. add /world to get the response world

Deploying application on Kubernetes:
  Deploy the services using below commands:
  kubectl apply -f hello.yaml
  kubectl apply -f world.yaml

  ensure both services are accessible through Kubernetes services
  Open two new terminals and make sure you are in right directory
  In terminal 1 execute:
  minikube service hello        #opens service in web browser.. add /hello to get the response hello

  In terminal 2 execute:
  minikube service world        #opens service in web browser.. add /world to get the response world

Run script "combine.js" to print "Hello World"
  In main terminal execute:
  node combine.js               #will print "Hello World" in console
  
    
    

    
