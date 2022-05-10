import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  let { id } = useParams();
  const [detailData, setDetailData] = useState("");
  const [videoData, setVideoData] = useState("");
  const getDetail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let detailData = await response.json();
    setDetailData(detailData);
  };
  const video = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let videoData = await response.json();
    setVideoData(videoData);
  };

  const videoKey =
    videoData &&
    videoData.results.find((item) => item.name.includes("Official")).key;

  useEffect(() => {
    getDetail();
    video();
  }, []);

  return (
    <div className="moviedetail-container">
      <div className="movie-poster">
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_multi_faces/${detailData.poster_path}`}
        />
      </div>
      <div className="movie-info">
        <h1 className="title">{detailData.title}</h1>
        <div className="genre">
          {detailData &&
            detailData.genres.map((item, i) => (
              <span key={i}>{item.name}</span>
            ))}
        </div>
        <div className="basic-info">
          <p>
            <span>평점 : </span>
            {detailData.vote_average} ({detailData.vote_count}명 참여)
          </p>
          <p>
            <span>인기점수 : </span>
            {detailData.popularity}
          </p>
          <p className="adult-auth">
            {detailData.adult ? "청소년관람불가" : ""}
          </p>

          <p>
            <span>영화요약</span> : <br />
            {detailData.overview}
          </p>
          <p>
            <span>개봉일</span> : {detailData.release_date}
          </p>
          <p>
            <span>런닝타임</span> : {detailData.runtime}분
          </p>

          <a
            href={`https://www.youtube.com/watch?v=${videoKey}`}
            target="_blank"
          >
            유튜브로 예고편 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
