require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/test', async (req, res) => {
  res.send('dfsdfsd');
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
  } catch (e) {}
};

start();
