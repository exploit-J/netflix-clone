let initState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: "true",
  genreList: [],
  keyword: "",
};

function movieReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_FAIL":
      return { ...state, loading: false };
    case "GET_KEYWORD":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}

export default movieReducer;
