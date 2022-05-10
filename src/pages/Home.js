import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/moveiAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return <ClipLoader color="#e50914" loading={loading} size={150} />;
  }

  return (
    <>
      <div className="home-container">
        <Banner movie={popularMovies.results[3]} />
      </div>
      <div className="slide-container">
        <h1>Popular Movies</h1>
        <MovieSlide movie={popularMovies} />
        <h1>Top rated Movies</h1>
        <MovieSlide movie={topRatedMovies} />
        <h1>Upcoming Movies</h1>
        <MovieSlide movie={upcomingMovies} />
      </div>
    </>
  );
};

export default Home;
