const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: '티셔츠', price: 20000 },
    { id: 2, name: '바지', price: 35000 }
];

router.get('/', (req, res) => {
    res.json(products);
})

module.exports = router;