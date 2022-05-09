import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1201 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1200, min: 465 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movie }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/detail");
  };
  return (
    <Carousel
      className="slide"
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={5000}
      autoPlay={false}
      showDots={true}
      dotListClass="custom-dot-list-style"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {movie.results.map((item, i) => (
        <span onClick={goDetail}>
          <MovieCard item={item} key={i} />
        </span>
      ))}
    </Carousel>
  );
};

export default MovieSlide;
