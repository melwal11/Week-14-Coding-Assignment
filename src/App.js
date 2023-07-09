import React, { useState } from 'react';

// MovieList component
const MovieList = () => {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: 'Ace Ventura: Pet Detective',
      image: 'ace-ventura.jpg',
      synopsis: 'Ace Ventura, a detective specializing in animals, goes in search of a missing dolphin mascot of a football team.',
      rating: 4.2,
    },
    {
      id: 2,
      title: 'Me, Myself & Irene',
      image: 'me-myself-irene.jpg',
      synopsis: 'A Rhode Island state trooper with multiple personality disorder has to escort an accused killer back to his hometown.',
      rating: 3.9,
    },
    {
      id: 3,
      title: 'Liar Liar',
      image: 'liar-liar.jpg',
      synopsis: 'A lawyer, who always tells the truth, is forced to tell lies by his son who makes a wish on his birthday.',
      rating: 4.1,
    },
  ];

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

// Movie component
const Movie = ({ movie }) => {
  const [rating, setRating] = useState(movie.rating);
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={rating} onChange={handleRatingChange} />
      <ReviewList reviews={reviews} />
      <Review onSubmit={handleReviewSubmit} />
    </div>
  );
};

// Stars component
const Stars = ({ rating, onChange }) => {
  const handleClick = (newRating) => {
    onChange(newRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          style={{ color: star <= rating ? 'gold' : 'gray', cursor: 'pointer' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

// ReviewList component
const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
    </div>
  );
};

// Review component
const Review = ({ onSubmit }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1>Movie Voting and Review App</h1>
      <MovieList />
    </div>
  );
};

export default App;
