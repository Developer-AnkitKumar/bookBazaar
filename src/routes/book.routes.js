import express from 'express';
import { createBook, getBooks, getBookId } from '../controllers/book.controllers.js';

const router = express.Router();

router.post('/create', createBook);
router.get('/get', getBooks);
router.get('/get/id', getBookId);

export default router;
