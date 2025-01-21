import React from "react";

const Carousel = ({ movies, onMovieSelect }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      <div className="flex space-x-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded-lg w-60 cursor-pointer hover:shadow-lg transition"
            onClick={() => onMovieSelect(movie)}
          >
            <h3 className="text-lg font-bold truncate">{movie.title}</h3>
            <p className="text-sm text-gray-600 truncate">
              IMDb: {movie.imdb_rating}{" "}
              {movie.oscar_winning > 0 && "| Oscar Winner"}
            </p>
            <p className="text-sm text-gray-600 truncate">
              Cast: {movie.cast.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
