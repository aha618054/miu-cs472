import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

// Handle GET request for /products
router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));
});

// Handle POST request for /products
router.post('/', (req: Request, res: Response) => {
  const productData = req.body;
  res.json({ message: 'Product data received', data: productData });
});

export default router;
