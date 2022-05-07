import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const Gnb = () => {
  const [search, setSearch] = useState(false);
  const showSearch = () => setSearch(!search);
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
            <form className="gnb-searchform sm-hidden">
              <input type="text" />
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
        >
          <input type="text" />
          <button type="submit">검색</button>
        </form>
      </div>
    </>
  );
};

export default Gnb;
