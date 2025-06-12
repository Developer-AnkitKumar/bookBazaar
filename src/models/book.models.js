import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  bookId: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
