let initState = {
  detailInfo: {},
  movieid: {},
  videoKey: {},
  reviewData: {},
  searchKeyword: {},
  loading: "true",
};

function detailReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_DETAIL_SUCCESS":
      return {
        ...state,
        detailInfo: payload.detailInfo,
        videoKey: payload.videoKey,
        reviewData: payload.reviewData,
        searchKeyword: payload.searchKeyword,
        loading: false,
      };
    case "GET_DETAIL_REQUEST":
      return { ...state, loading: true };
    case "GET_ID":
      return { ...state, movieid: payload.id };
    case "GET_MOVIES_FAIL":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default detailReducer;
