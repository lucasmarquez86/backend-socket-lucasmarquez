import express from 'express';
import products from '../products.js';

const router = express.Router();

// Ruta para la vista 'home'
router.get('/', (req, res) => {
  res.render('home', { productos: products.getProducts() });
});

// Ruta para la vista 'realTimeProducts'
router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { productos: products.getProducts() });
});

export default router;