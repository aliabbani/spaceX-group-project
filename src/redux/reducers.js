const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_ROCKETS = 'FETCH_SUCCESS_ROCKETS';
const FETCH_SUCCESS_MISSIONS = 'FETCH_SUCCESS_MISSIONS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  rockets: [],
  missions: [],
  userRockets: [],
  userMissions: [],
};

export const fetchPostsSuccessRockets = (payload) => ({
  type: FETCH_SUCCESS_ROCKETS,
  payload,
});

export const fetchPostsSuccessMissions = (payload) => ({
  type: FETCH_SUCCESS_MISSIONS,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchPostsRequestRockets = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  const request = await fetch('https://api.spacexdata.com/v3/rockets');
  const result = await request.json();
  dispatch(fetchPostsSuccessRockets(result));
};

export const fetchPostsRequestMissions = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const result = await request.json();
  dispatch(fetchPostsSuccessMissions(result));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        rockets: [],
        missions: [],
        loading: true,
      };

    case FETCH_SUCCESS_ROCKETS:
      return {
        loading: false,
        rockets: action.payload,
        error: '',
      };

    case FETCH_SUCCESS_MISSIONS:
      return {
        loading: false,
        missions: action.payload,
        error: '',
      };

    case FETCH_ERROR:
      return {
        loading: false,
        rockets: [],
        missions: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
