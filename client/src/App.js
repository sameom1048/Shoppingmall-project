import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>쇼핑몰 상품 목록</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name} - {p.price}원</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;
  if (product.error) return <div>{product.error}</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>가격: {product.price}원</p>
      <Link to="/">목록으로 돌아가기</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
