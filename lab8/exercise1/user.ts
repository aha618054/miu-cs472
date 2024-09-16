import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

// Handle GET request for /users
router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

// Handle POST request for /users
router.post('/', (req: Request, res: Response) => {
  const userData = req.body;
  res.json({ message: 'User data received', data: userData });
});

export default router;
