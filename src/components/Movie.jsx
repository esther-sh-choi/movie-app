import React, { useState } from "react";

// npm install sass --save-dev
import "./Movie.scss";

const Movie = ({ poster, title, releaseYear, imdbId }) => {
  const [openDetail, setOpenDetail] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  const getMovieDetails = (imdbId) => {
    fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=f9befcfc`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDetails(result);
          setOpenDetail(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const handleDetailClick = () => {
    if (!openDetail) {
      getMovieDetails(imdbId);
    } else {
      setOpenDetail(false);
    }
  };
  const { Title, Rated, Runtime, Genre, Director, Actors, Plot, imdbRating } =
    details;

  return (
    <div className="movie-container">
      {isLoaded && openDetail ? (
        <section className="detail-card">
          <p>
            <span>Title:</span> {Title}
          </p>
          <p>
            <span>Rated:</span> {Rated}
          </p>
          <p>
            <span>Runtime:</span> {Runtime}
          </p>
          <p>
            <span>Genre:</span> {Genre}
          </p>
          <p>
            <span>Director:</span> {Director}
          </p>
          <p>
            <span>Starring:</span> {Actors}
          </p>
          <p>
            <span>Summary:</span> {Plot}
          </p>
          <p>
            <span>Rating:</span> {imdbRating}
          </p>
        </section>
      ) : (
        <>
          <img
            src={
              poster !== "N/A"
                ? poster
                : "https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg"
            }
            alt="poster image"
            className="poster-image"
          />
          <section className="movie-info">
            <h3 className="movie-title">{title}</h3>
            <p className="release-year">{releaseYear}</p>
          </section>
        </>
      )}
      <button className="detail-button" onClick={handleDetailClick}>
        Details
      </button>
    </div>
  );
};

export default Movie;
