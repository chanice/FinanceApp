const firebaseConfig = {
  apiKey: "AIzaSyAI_bNp_G-qTooRUh91NAvDHudkiu53wvM",
  authDomain: "pirateapp-266f7.firebaseapp.com",
  databaseURL: "https://pirateapp-266f7.firebaseio.com",
  projectId: "pirateapp-266f7",
  storageBucket: "pirateapp-266f7.appspot.com",
  messagingSenderId: "493559204969",
  appId: "1:493559204969:web:92baf2e37f51390b1666f8"
};

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});