require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'https://gustavogaviria17.github.io',
      'http://localhost:5175',
      'http://localhost:5173',
      'http://localhost:5174',
    ], // Разрешенные источники
    credentials: true, // Включаем передачу куки
  }),
);
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        'mongodb+srv://groyergAdmin:rhBDcItK3Ox4NHHl@clustergroyerg.to1klkw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGroyerg',
    );
    app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

start();
