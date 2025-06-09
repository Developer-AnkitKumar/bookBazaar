import express from 'express';

const createBook = (req, res) => {
  const { title, author, publishedDate } = req.body;
  res.status(201).json({ message: 'Book created is successfully',
     book: { title, author, publishedDate } });
}

const getBooks = (req, res) => {
  // Logic to retrieve books from the database
  res.status(200).json({ message: 'Books retrieved successfully', books: [] });
}

export { createBook, getBooks };