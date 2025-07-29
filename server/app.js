const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const productRouter = require('./routes/product');

app.use('/api/products', productRouter);

// 미들웨어
app.use(cors());
app.use(express.json());

// 기본 라우터 (테스트용)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
