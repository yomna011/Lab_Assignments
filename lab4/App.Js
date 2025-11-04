import React, { useState } from "react";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleAddMovie = () => {
    if (movieName.trim() === "") return;
    const newMovie = {
      id: Date.now(),
      name: movieName,
      comment,
      rating,
    };
    setMovies([...movies, newMovie]);
    setMovieName("");
    setComment("");
    setRating(0);
  };

  const handleRemoveMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const renderStars = (value, clickable = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= value ? "star filled" : "star"}
          onClick={clickable ? () => handleRatingChange(i) : null}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="app">
      <h1>Movies Watch List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter movie name..."
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />

        <textarea
          placeholder="Add a short review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="rating">{renderStars(rating, true)}</div>

        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <div className="movies-list">
        {movies.length === 0 ? (
          <p className="empty">No movies added yet 🎥</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h2>{movie.name}</h2>
              <div className="stars">{renderStars(movie.rating)}</div>
              <p className="comment">💬 {movie.comment || "No review"}</p>
              <button
                className="delete-btn"
                onClick={() => handleRemoveMovie(movie.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
