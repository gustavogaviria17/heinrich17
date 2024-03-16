require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: ['https://gustavogaviria17.github.io', 'http://localhost:5175'], // Разрешенные источники
    credentials: true, // Включаем передачу куки
  }),
);

app.get('/', async (req, res) => {
  res.send('Hello world');
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
  } catch (e) {}
};

start();
