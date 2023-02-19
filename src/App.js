import React, { useState, useEffect } from "react";

import "./App.css";

import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const getSearchedMovies = (searchValue) => {
    const apiSearchValue = searchValue.trim();
    fetch(`http://www.omdbapi.com/?s=${apiSearchValue}&apikey=f9befcfc`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          const movieList = result.Search?.filter(
            (res) => res.Type === "movie"
          );
          console.log(movieList);
          setMovies(movieList);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  useEffect(() => {
    getSearchedMovies(searchValue);
  }, [searchValue]);

  const handleSearchValueChange = (newSearchValue) => {
    setSearchValue(newSearchValue);
  };

  return (
    <div className="App">
      <Title>Movie Search App</Title>
      {/* <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={handleSearchValueChange}
      />
      <MovieList movieDataArray={movies} isLoaded={isLoaded} />
    </div>
  );
}

export default App;
