import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
const Gnb = () => {
  const [search, setSearch] = useState(false);
  const showSearch = () => setSearch(!search);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const keywordSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "GET_KEYWORD", payload: { keyword: keyword } });
    navigate(`/movies/`);
  };
  return (
    <>
      <div className={search ? "gnb-container active" : "gnb-container"}>
        <div className={search ? "gnb-top active" : "gnb-top"}>
          <div className="gnb-tl">
            <div className="logo">
              <img src={logo} />
            </div>
            <ul>
              <li>
                <Link className="link sm-hidden" to="/">
                  Home
                </Link>
                <Link className="link sm-only" to="/">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>
              <li>
                <Link className="link sm-hidden" to="/movies">
                  Movies
                </Link>
                <Link className="link sm-only" to="/movies">
                  <FontAwesomeIcon icon={faClapperboard} />
                </Link>
              </li>
              <li>
                <button className="sm-only" type="submit" onClick={showSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </li>
            </ul>
          </div>
          <div className="gnb-tr">
            <form
              className="gnb-searchform sm-hidden"
              onSubmit={(e) => keywordSearch(e)}
            >
              <div className="input-area">
                <input
                  className="key-input"
                  type="text"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  className="clear-btn"
                  type="button"
                  onClick={() => {
                    document.querySelector(".key-input").value = "";
                    setKeyword("");
                  }}
                >
                  x
                </button>
              </div>
              <button type="submit">검색</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={
          search ? "search-m-con sm-only active" : "search-m-con sm-only"
        }
      >
        <form
          className={
            search ? "search-m-form sm-only active" : "search-m-form sm-only"
          }
          onSubmit={(e) => keywordSearch(e)}
        >
          <div className="input-area-sm">
            <input
              className="key-input-sm"
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="clear-btn-sm"
              type="button"
              onClick={() => {
                document.querySelector(".key-input-sm").value = "";
                setKeyword("");
              }}
            >
              x
            </button>
          </div>
          <button type="submit">검색</button>
        </form>
      </div>
    </>
  );
};

export default Gnb;
