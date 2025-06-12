import express from 'express';
import { createOrders, getOrders, updateOrderStatus } from '../controllers/order.controllers.js';  

const router = express.Router();

router.post('/create', createOrders);
router.get('/get', getOrders);
router.put('/update', updateOrderStatus);

export default router;
