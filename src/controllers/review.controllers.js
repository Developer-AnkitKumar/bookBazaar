
const reviewService = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Review service is working",
  });
}

const addReview = (req, res) => {
  const { bookId, review } = req.body;

  res.status(201).json({
    success: true,
    message: "Review added successfully",
    data: {
      bookId,
      review,
    },
  });
}

const getReviewsByBookId = (req, res) => {
  const { bookId } = req.params;

  const reviews = [
    { id: 1, bookId, review: "Great book!" },
    { id: 2, bookId, review: "Very informative book." },
  ];

  res.status(200).json({
    success: true,
    message: "Reviews fetched successfully",
    data: reviews,
  });
}

export { reviewService, addReview, getReviewsByBookId };