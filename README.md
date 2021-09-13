# Go barber

## What is GoBarber ? 
  GoBarber is the main project developed during GoStack Bootcamp. Its purpose is to create an aplication which allows users to book appointments in a barber shop.
  
## How to run it in my machine ?

### Before starting, You need to have:
  - [Git](https://git-scm.com/downloads)
  - [Node JS LTS](https://nodejs.org/en/download/)
  - [Docker Desktop](https://www.docker.com/get-started)

![68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656c6961736763662f696d6167652f75706c6f61642f76313538383831313231332f476f4261726265722f4b6170747572655f323032302d30352d30365f61745f32312e32352e32365f74696a6e6c352e676966](https://user-images.githubusercontent.com/9820600/133170753-b6f83a50-e8c7-4bfa-a6e8-e7aa5b0e0c42.gif)

### Before following the next steps, clone this repository:

```bash
 # Cloning
 git clone https://github.com/tsuyusk/go-barber
 
 # Go to the 'go-barber' folder
 cd go-barber
```

### Running the server
```bash
  # Go to the 'backend' folder
  cd backend
  
  # Install dependencies
  npm install
  
  # Create the database instances
  docker run --name postgres -e -POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  docker run --name mongo -p 27017:27017 -d -t mongo
  docker run --name redis -p 6379:6379 -d -t redis:alpine
  
  # Create a database inside this instance called 'gostack_gobarber'
  
  # Start the server
  npm run dev:server / npm run start:ts
```

### Running the web version ( provider version )

```bash
  # Go to the 'web' folder
  cd web
  
  # Install dependencies
  npm install
  
  # Start the web version
  npm start
  
  # Go to http://localhost:3000
```
  
### Running the mobile version ( user version )

```bash
  # Go to the 'appgobarber' folder
  cd appgobarber
  
  # Install dependencies
  npm install
  
  # If You are on IOS,
  cd ios
  pod install
  
  # Install the mobile version
  npm run android / npm run ios
```

**If the mobile version does not work, You might have to replace the ipv4 in appgobarber/src/services/api.ts for your ipv4**

Made with 💜 by Ederson Luís
