import React, { useState, useEffect } from "react";

import Movie from "./Movie";

import "./MovieList.scss";

const MovieList = () => {
  // const movieData = {
  //   Title: "Harry Potter and the Sorcerer's Stone",
  //   Year: "2001",
  //   imdbID: "tt0241527",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  // };

  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=Harry+Potter&apikey=f9befcfc")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          setMovies(result.Search);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="movie-list-container">
      {isLoaded &&
        movies.map((movie) => <Movie {...movie} key={movie.imdbID} />)}
    </div>
  );
};

export default MovieList;
