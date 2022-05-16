import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageCard from "../components/PageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {
  const [topbutton, setTopbutton] = useState(false);
  const [sortFormActive, setSortFormActive] = useState(false);
  const [sortPopularActive, setSortPopularActive] = useState(false);
  const [sortVoteActive, setSortVoteActive] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const { popularMovies, keyword } = useSelector((state) => state.movie);

  const sortPopular = () => {
    setSortPopularActive(!sortPopularActive);
    if (sortPopularActive === false) {
      searchResult.results.sort((a, b) => b.popularity - a.popularity);
    } else if (sortPopularActive === true) {
      searchResult.results.sort((a, b) => a.popularity - b.popularity);
    }
  };

  const sortVote = () => {
    setSortVoteActive(!sortVoteActive);
    if (sortVoteActive === false) {
      searchResult.results.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortVoteActive === true) {
      searchResult.results.sort((a, b) => a.vote_average - b.vote_average);
    }
  };

  const topButtonActive = () => {
    window.scrollY > 800 ? setTopbutton(true) : setTopbutton(false);
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", topButtonActive);
    };
    watch();
    getDataApi(1);
  }, [keyword]);

  const APIkey = process.env.REACT_APP_API_KEY;
  const getDataApi = async () => {
    if (keyword !== "") {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      setSearchResult(data);
    } else {
      setSearchResult(popularMovies);
    }
  };

  // const currentItems = searchResult.total_pages;
  // console.log("currentItems", currentItems);

  return (
    <>
      <div className="movie-container">
        <div className="dropdown-area">
          <div className="sort">
            <button
              className={sortFormActive ? "active" : ""}
              onClick={() => setSortFormActive(!sortFormActive)}
            >
              Sort
            </button>
            <ul className={sortFormActive ? "active" : ""}>
              <li onClick={sortPopular}>인기순</li>
              <li onClick={sortVote}>평점순</li>
            </ul>
            <FontAwesomeIcon
              className={sortFormActive ? "arrow active" : "arrow"}
              icon={faCaretDown}
              onClick={() => setSortFormActive(!sortFormActive)}
            />
          </div>
        </div>
        <div className="movie-card-area">
          <ul className="card-item">
            {searchResult &&
              searchResult.results.map((item, i) => (
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
