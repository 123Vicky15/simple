/* Node server*/
/* const http = require('http');

const server = http.createServer((req,res) => {
    res.status = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000,() => {
    console.log('Server on port 3000');
}); */

/* Express server*/
const express = require('express');
const path = require('path');

const app = express();

/* Express Routine quiere decir que cuando el usuario escriba la direccion y / lo llevara a nuestra pagina*/
app.get('/', (req,res) => {
    res.sendFile("C:\\Users\\A19A56031\\Desktop\\Mango\\src\\moon.html");
});

app.get('/about:extra', (req,res) => {
    res.sendFile("C:\\Users\\A19A56031\\Desktop\\Mango\\j.html");
 }); 

app.listen (8080, () => {
    console.log('Server on port 8080');
});