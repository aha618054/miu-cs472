import express, { Application } from 'express';
import bookRoutes from './routes/bookRoutes';

const app: Application = express();

app.use(express.json());
app.use('/books', bookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
