const express = require('express');
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
});