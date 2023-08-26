/*const express = require('express');
const fs = require('fs');
const app = express();
const port = 2000;

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.url}\n`;
  fs.appendFile('requests.txt', log, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    }
  });
  next();
});
// Route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});*/

const http = require('http');
const fs = require('fs');
const PORT = 1000;
const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} - ${req.url}\n`;
 
  fs.appendFile('requests.txt', log, (err) => {
    if (err) {
      console.error('Error writing to requests.txt:', err);
    }
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Request log successfully!\n');
});

server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});