import React from "react";

const MovieDetailsCard = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/12">
        <div className="flex align-center justify-between">
          <h2 className="flex align-center justify-center text-2xl font-bold mb-4 truncate">
            {movie.title}
          </h2>
          <div
            className="flex align-center text-center justify-center cursor-pointer text-red mb-4"
            onClick={onClose}
          >
            X
          </div>
        </div>

        <p>
          <strong>Year:</strong> {movie.year}
        </p>
        <p>
          <strong>IMDb Rating:</strong> {movie.imdb_rating}
        </p>
        <p>
          <strong>Cast:</strong> {movie.cast.join(", ")}
        </p>
        <p>
          <strong>Genre:</strong> {movie.genre.join(", ")}
        </p>
        <p>
          <strong>Language:</strong> {movie.language.join(", ")}
        </p>
        <p>
          <strong>Oscar Nominations:</strong> {movie.oscar_nominations}
        </p>
        <p>
          <strong>Oscar Wins:</strong> {movie.oscar_winning}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
