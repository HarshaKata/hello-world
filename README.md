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
  Execute following commands in terminal: (ensure you are in right directory)
    docker login
  #to build the docker images of both microservices
    docker build -t hello:latest -f Dockerfile.hello .
    docker build -t world:latest -f Dockerfile.world .
  #tag and push the images to Docker hub
    docker tag hello:latest harshakata/hello:latest  #harshakata is my dockerhub username.. command is docker tag hello:latest harshakata/hello:latest
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
  Open two new terminals
  In terminal 1 execute:
  minikube service hello        #opens service in web browser.. add /hello to get the response hello

  In terminal 2 execute:
  minikube service world        #opens service in web browser.. add /world to get the response world

Run script "combine.js" to print "Hello World"
  In main terminal execute:
  node combine.js               #will print "Hello World" in console

Docker image links:  
world: https://hub.docker.com/layers/harshakata/world/latest/images/sha256:7d63bf16f63c1c11b7bf037b6f48b86d569513101e94fb1f83197dbb0e67f7fd?uuid=8f6ea230-7cc4-4730-9a1e-0317ed314bbe%0A 
hello: https://hub.docker.com/layers/harshakata/hello/latest/images/sha256:c2db5f6af9b557de1de59c1f2e5790f5681c38a5e1bbd043bf39a467766d4ee6?uuid=8f6ea230-7cc4-4730-9a1e-0317ed314bbe%0A
    
