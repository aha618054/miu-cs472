import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import usersRouter from './routes/users';
import productsRouter from './routes/products';

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Use Routers for /users and /products
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// 404 Page
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
