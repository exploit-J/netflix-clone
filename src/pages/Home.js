import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/moveiAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getmovies());
  }, []);

  return <>HOme</>;
};

export default Home;
