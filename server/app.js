const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const productRouter = require('./routes/product');

// 1. 미들웨어 먼저
app.use(cors());
app.use(express.json());

// 2. 라우터 등록
app.use('/api/products', productRouter);

// 3. (선택) 추가 라우터
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
