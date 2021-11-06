# VueJS 3 Chat App with Vuex 4 and Boostrap 5
![](demo-app.gif)

## Project setup
```
npm install
cd server && npm install
```

### Configuration
open .ev file and update with your information, if needed.
```
VUE_APP_SERVER_SOCKET_IO_ENDPOINT=http://localhost
VUE_APP_SERVER_SOCKET_IO_ENDPOINT_PORT=3011
VUE_APP_HOSTNAME=http://localhost
VUE_APP_HOSTNAME_PORT=8080
```

### Compiles and hot-reloads for development
```
npm run serve
```
open new terminal
```
cd server
node server.js // or use nodemon, nodemon server.js
```

### Compiles and minifies for production
Client 
```
npm run build
```
Server:
```
cd server
node server.js
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
