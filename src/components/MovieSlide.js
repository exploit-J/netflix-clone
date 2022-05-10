import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
        <MovieCard item={item} key={i} />
      ))}
    </Carousel>
  );
};

export default MovieSlide;
