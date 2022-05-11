import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

const getDetail = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_DETAIL_REQUEST" });

    const detailInfoApi = api.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const videoKeyApi = api.get(
      `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    const reviewDataApi = api.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const searchKeywordApi = api.get(
      `/search/keyword?api_key=${API_KEY}&page=1&query=alien`
    );

    let [detailInfo, videoKey, reviewData, searchKeyword] = await Promise.all([
      detailInfoApi,
      videoKeyApi,
      reviewDataApi,
      searchKeywordApi,
    ]);

    dispatch({
      type: "GET_DETAIL_SUCCESS",
      payload: {
        detailInfo: detailInfo.data,
        videoKey: videoKey.data,
        reviewData: reviewData.data,
        searchKeyword: searchKeyword.data,
      },
    });
  };
};

export const detailAction = { getDetail };
