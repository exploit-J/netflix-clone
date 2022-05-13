import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import MovieModal from "../components/MovieModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { detailAction } from "../redux/actions/detailAction";
import Review from "../components/Review";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [modal, setModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(true);
  const [topbutton, setTopbutton] = useState(false);

  const { detailInfo, videoKey, reviewData, loading, recommendMovie } =
    useSelector((state) => state.detail);
  const modalToggle = () => {
    setModal(!modal);
  };
  const topButtonActive = () => {
    window.scrollY > 800 ? setTopbutton(true) : setTopbutton(false);
  };

  useEffect(() => {
    dispatch(detailAction.getDetail(id));
    const watch = () => {
      window.addEventListener("scroll", topButtonActive);
    };
    watch();
  }, [id]);

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
        <MovieModal modal={modal} setModal={setModal} videoKey={videoKey} />
      )}
      <div className="detail">
        <div className="moviedetail-container">
          <div className="movie-poster">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_multi_faces/${detailInfo.poster_path}`}
            />
          </div>
          <div className="movie-info">
            <h1 className="title">{detailInfo.title}</h1>
            <div className="genre">
              {detailInfo &&
                detailInfo.genres.map((item, i) => (
                  <span key={i}>{item.name}</span>
                ))}
            </div>
            <div className="basic-info">
              <p>
                <span>평점 : </span>
                {detailInfo.vote_average} ({detailInfo.vote_count}명 참여)
              </p>
              <p>
                <span>인기점수 : </span>
                {detailInfo.popularity.toFixed(1)}
              </p>
              <p className="adult-auth">
                {detailInfo.adult ? "청소년관람불가" : ""}
              </p>

              <p>
                <span>영화요약</span> : <br />
                {detailInfo.overview}
              </p>
              <p>
                <span>개봉일</span> : {detailInfo.release_date}
              </p>
              <p>
                <span>런타임</span> : {detailInfo.runtime}분
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
                <span>메인 예고편</span>
              </button>
            </div>
          </div>
        </div>
        <div className="moviereview-container">
          <div className="review-tab">
            <button
              className={currentTab ? "active" : ""}
              onClick={() => setCurrentTab(true)}
            >
              리뷰<span>({reviewData.results.length})</span>
            </button>
            <button
              className={currentTab ? "" : "active"}
              onClick={() => setCurrentTab(false)}
            >
              비슷한 영화<span>({recommendMovie.results.length})</span>
            </button>
          </div>
          {currentTab && (
            <div className="review-section">
              {reviewData.results.map((item, i) => (
                <div className="review-item" key={i}>
                  <Review item={item} key={i} />
                </div>
              ))}
            </div>
          )}
          {currentTab || (
            <div className="related-section">
              {recommendMovie.results.map((item, i) => (
                <div className="related-item" key={i}>
                  <MovieCard item={item} key={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={topbutton ? "top-button active" : "top-button"}
        onClick={() => {
          window.scrollTo({
            top: 0,
          });
        }}
      >
        Top
      </div>
    </>
  );
};

export default MovieDetail;
