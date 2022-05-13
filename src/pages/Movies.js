import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageCard from "../components/PageCard";

const Movies = () => {
  const [topbutton, setTopbutton] = useState(false);
  const {
    popularMovies,
    // topRatedMovies, upcomingMovies, loading, genreList
  } = useSelector((state) => state.movie);
  // const { detailInfo, videoKey, reviewData, recommendMovie } = useSelector(
  //   (state) => state.detail
  // );
  // console.log("popularMovies", popularMovies);

  const topButtonActive = () => {
    window.scrollY > 800 ? setTopbutton(true) : setTopbutton(false);
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", topButtonActive);
    };
    watch();
  }, []);

  return (
    <>
      <div className="movie-container">
        <div className="dropdown-area">
          <div className="sort">
            <button>Sort</button>
            <ul>
              <li>오름차순</li>
              <li>내림차순</li>
            </ul>
          </div>
          <div className="filter">Filter</div>
        </div>
        <div className="movie-card-area">
          <ul className="card-item">
            {popularMovies.results.map((item, i) => (
              <li key={i}>
                <PageCard item={item} key={i} />
              </li>
            ))}
          </ul>
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

export default Movies;
