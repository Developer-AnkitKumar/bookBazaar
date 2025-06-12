import crypto from 'crypto';
import { validationResult } from 'express-validator';

const createPayment = (req, res) => {
    const paymentId = 'pay_' + crypto.randomBytes(16).toString('hex');
    res.status(201).json({
        success: true,
        message: "Payment created successfully",
        paymentId: paymentId
    });
}


const verifyPayment = (req, res) => {
    const { paymentId, orderId } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors.array()
        });
    }
    if (!paymentId || !orderId) {
        return res.status(400).json({
            success: false,
            message: "Payment ID and Order ID are required"
        });
    }
    res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        paymentId: paymentId,
        orderId: orderId
    });
}

export {
    createPayment,
    verifyPayment
};