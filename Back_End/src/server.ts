import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({
        message: 'An error occurred and caught in the error-handling middleware.',
        error: err.message
    });
});

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('server running...');
    })
} catch (err) {
    console.error("error while running server. \n ", err);
}