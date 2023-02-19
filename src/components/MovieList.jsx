import React from "react";

import Movie from "./Movie";

import "./MovieList.scss";

const MovieList = ({ movieDataArray, isLoaded }) => {
  return (
    <div className="movie-list-container">
      {isLoaded &&
        movieDataArray?.map((movie) => (
          <Movie
            title={movie.Title}
            poster={movie.Poster}
            releaseYear={movie.Year}
            imdbId={movie.imdbID}
            key={movie.imdbID}
          />
        ))}
    </div>
  );
};

export default MovieList;
