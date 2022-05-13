import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
      className="moviecard-container"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path}` +
          ")",
      }}
      onClick={showDetail}
    >
      <div className="card-overlay">
        <h1 className="title">{item.title}</h1>
        <div className="genre">
          {item.genre_ids.map((id, i) => (
            <span key={i}>{genreList.find((item) => item.id == id).name}</span>
          ))}
        </div>
        <div className="etc">
          <span>
            <FontAwesomeIcon icon={faStar} />
            {item.vote_average}
          </span>
          <span>{item.adult ? "청소년관람불가" : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
