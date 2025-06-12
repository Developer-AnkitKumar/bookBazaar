import express from 'express';
import {reviewService, addReview, getReviewsByBookId } from '../controllers/review.controllers.js';

const router = express.Router();

router.get('/review', reviewService);
router.post('/add', addReview);
router.get('/bookId', getReviewsByBookId);

export default router;
