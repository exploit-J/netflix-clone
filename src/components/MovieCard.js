import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div
      className="moviecard-container"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}` +
          ")",
      }}
    ></div>
  );
};

export default MovieCard;
