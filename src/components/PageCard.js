import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const PageCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const release = item.release_date.slice(0, 4);

  return (
    <div
      className="pagecard-container"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_multi_faces/${item.backdrop_path}` +
          ")",
      }}
      //   onClick={() => navigate(`/movies/${item.id}`)}
    >
      <div className="card-info">
        <div className="card-header">
          <div className="image">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
            />
          </div>
          <div className="header">
            <p className="title">{item.title}</p>
            <p className="release" title="개봉년도">
              {release}
            </p>
          </div>
        </div>
        <div className="card-genre">
          {item.genre_ids.map((id, i) => (
            <span key={i}>{genreList.find((item) => item.id == id).name} </span>
          ))}
        </div>
        <div className="card-overview">
          <p>{item.overview}</p>
        </div>
        <div className="card-footer">
          <div className="vote" title="평점">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            {item.vote_average}
          </div>
          <div className="popular" title="인기점수">
            <span>
              <FontAwesomeIcon icon={faUsers} />
            </span>
            {item.popularity.toFixed(1)}
          </div>
          <div className="adult">{item.adult ? "청소년관람불가" : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
