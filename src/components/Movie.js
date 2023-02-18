import React from "react";

// npm install sass --save-dev
import "./Movie.scss";

const Movie = ({ Poster, Title, Year }) => {
  console.log(Poster, Title, Year);
  return (
    <div className="movie-container">
      <img src={Poster} alt="poster image" className="poster-image" />
      <section className="movie-info">
        <h3 className="movie-title">{Title}</h3>
        <p className="release-year">{Year}</p>
      </section>
    </div>
  );
};

export default Movie;
