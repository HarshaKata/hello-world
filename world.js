const express = require('express');
const app = express();
const port = 3001;

app.get('/world', (req, res) => {
  res.send('World');
});

app.listen(port, () => {
  console.log(`World Service listening at http://localhost:${port}`);
});
