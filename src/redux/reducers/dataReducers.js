/* eslint camelcase: 0 */
const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_ROCKETS = 'FETCH_SUCCESS_ROCKETS';
const FETCH_SUCCESS_MISSIONS = 'FETCH_SUCCESS_MISSIONS';
const FETCH_ERROR = 'FETCH_ERROR';
const ADD_ROCKET = 'ADD_ROCKET';
const REMOVE_ROCKET = 'REMOVE_ROCKET';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = {
  loading: true,
  rockets: [],
  missions: [],
  userRockets: [],
  userMissions: [],
};

export const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

export const removeRocket = (payload) => ({
  type: REMOVE_ROCKET,
  payload,
});

export const fetchPostsSuccessRockets = (payload) => ({
  type: FETCH_SUCCESS_ROCKETS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
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
  dispatch(
    fetchPostsSuccessRockets(
      result.map((rocket) => {
        const result_min = (({
          id,
          rocket_type,
          flickr_images,
          rocket_name,
          description,
        }) => ({
          id,
          rocket_type,
          flickr_images,
          rocket_name,
          description,
          reserved: false,
        }))(rocket);
        return result_min;
      }),
    ),
  );
};

export const fetchPostsRequestMissions = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const result = await request.json();
  dispatch(
    fetchPostsSuccessMissions(
      result.map((mission) => {
        const result_min = (({
          mission_id,
          mission_name,
          description,
        }) => ({
          mission_id,
          mission_name,
          description,
          reserved: false,
        }))(mission);
        return result_min;
      }),
    ),
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        rockets: [...state.rockets],
        missions: [...state.missions],
        loading: true,
      };

    case FETCH_SUCCESS_ROCKETS:
      return {
        loading: false,
        rockets: action.payload,
        missions: [...state.missions],
      };

    case FETCH_SUCCESS_MISSIONS:
      return {
        loading: false,
        missions: action.payload,
        rockets: [...state.rockets],
      };

    case FETCH_ERROR:
      return {
        loading: false,
        rockets: [],
        missions: [],
        error: action.payload,
      };

    case ADD_ROCKET:
      return {
        ...state,
        rockets: [
          ...state.rockets.map((rocket) => (rocket.id === action.payload
            ? { ...rocket, reserved: true }
            : rocket)),
        ],
      };

    case REMOVE_ROCKET:
      return {
        ...state,
        rockets: [
          ...state.rockets.map((rocket) => (rocket.id === action.payload
            ? { ...rocket, reserved: false }
            : rocket)),
        ],
      };

    case JOIN_MISSION:
      return {
        ...state,
        missions: [
          ...state.missions.map((mission) => ((mission.mission_id === action.payload)
            ? { ...mission, reserved: true }
            : mission)),
        ],
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: [
          ...state.missions.map((mission) => ((mission.mission_id === action.payload)
            ? { ...mission, reserved: false }
            : mission)),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
