import express, { Application } from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();

// General middleware that runs for all routes
app.use((req, res, next) => {
    console.log(1);
    next();
}, (req, res, next) => {
    console.log(2);
    next('route');
}, (req, res, next) => {
    console.log(3);
    next();
});

// GET /users route
app.get('/users', (req, res, next) => {
    console.log(4);
    next('route');
}, (req, res, next) => {
    console.log(5);
    next();
});

// POST /users route
app.post('/users', (req, res) => {
    console.log(6);
    res.end('POST');
});

// 404 handler for any other route
app.use((req, res, next) => {
    console.log(7);
    res.end('404');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

