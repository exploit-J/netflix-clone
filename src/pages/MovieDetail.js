import React from "react";

const MovieDetail = () => {
  return (
    <div className="moviedetail-container">
      <div className="poster">
        <img src="" />
      </div>
      <div className="movie-info">
        <div className="genre">action</div>
        <h1>title</h1>
        <div>
          <span>평점</span>
          <span>관객수</span>
          <span>연령제한</span>
        </div>
        <p>줄거리...</p>
        <p>개봉일</p>
        <p>런닝타임</p>

        <a href="">예고편</a>
      </div>
    </div>
  );
};

export default MovieDetail;
