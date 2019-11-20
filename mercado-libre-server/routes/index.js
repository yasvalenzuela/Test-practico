const app = require('express');
const products = require('../controllers/products');
const api = app.Router();

// Product Results

api.get('/api/items',  products.getProducts);
api.get('/api/items/:id', products.getDetailProduct);



module.exports = api;
