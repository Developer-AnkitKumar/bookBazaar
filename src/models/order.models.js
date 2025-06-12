import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  userId: { type: String, required: true },
  orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
