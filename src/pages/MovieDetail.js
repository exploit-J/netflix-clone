import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import MovieModal from "../components/MovieModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  let { id } = useParams();
  const [detailData, setDetailData] = useState("");
  const [videoData, setVideoData] = useState("");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  const getDetail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let detailData = await response.json();
    setDetailData(detailData);

    let url1 = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    let response1 = await fetch(url1);
    let videoData = await response1.json();
    setVideoData(videoData);
    setLoading(false);
  };

  // const videoKey =
  //   videoData &&
  //   videoData.results.find((item) => item.name.includes("Official")).key;

  const videokey = videoData && videoData.results[0].key;

  useEffect(() => {
    getDetail();
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="#e50914" loading={loading} size={250} />
      </div>
    );
  }

  return (
    <>
      {modal && (
        <MovieModal modal={modal} setModal={setModal} videokey={videokey} />
      )}
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
              <span>런타임</span> : {detailData.runtime}분
            </p>
            <button
              onClick={() => {
                modalToggle();
                window.scrollTo({
                  top: 0,
                });
              }}
              className="ad-button"
            >
              <FontAwesomeIcon icon={faVideo} />
              <span>홍보영상 보기</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
