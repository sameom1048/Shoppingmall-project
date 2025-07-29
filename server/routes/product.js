const express = require('express');
const router = express.Router();

// 예시 상품 배열
const products = [
  { id: 1, name: '티셔츠', price: 20000, image: 'tshirt.jpg', description: '부드러운 면 소재 티셔츠' },
  { id: 2, name: '바지', price: 35000, image: 'pants.jpg', description: '여름용 쿨 팬츠' },
  { id: 3, name: '운동화', price: 50000, image: 'shoes.jpg', description: '심플한 디자인의 운동화' },
  { id: 4, name: '자켓', price: 78000, image: 'jacket.jpg', description: '봄가을용 캐주얼 자켓' },
  { id: 5, name: '모자', price: 15000, image: 'cap.jpg', description: '유행하는 볼캡' },
  { id: 6, name: '백팩', price: 42000, image: 'backpack.jpg', description: '노트북도 들어가는 백팩' },
  { id: 7, name: '양말', price: 4000, image: 'socks.jpg', description: '컬러풀한 패턴 양말' },
  { id: 8, name: '스웨트셔츠', price: 27000, image: 'sweatshirt.jpg', description: '베이직 맨투맨' },
  { id: 9, name: '스커트', price: 33000, image: 'skirt.jpg', description: '여성용 체크 스커트' },
  { id: 10, name: '아우터', price: 99000, image: 'outer.jpg', description: '방수 재킷' }
];


// 상품 목록 조회
router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === id);
    if(product) {
        res.json(product);
    } else {
        res.status(404).json({error: '상품을 찾을 수 없습니다.'})
    }
})

module.exports = router;
