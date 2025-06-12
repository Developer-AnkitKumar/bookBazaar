import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import bookRoutes from './routes/book.routes.js';
import orderRoutes from './routes/order.routes.js';
import reviewRoutes from './routes/review.routes.js';
import paymentRoutes from './routes/payment.routes.js';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the Book Bazaar API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/payments", paymentRoutes);