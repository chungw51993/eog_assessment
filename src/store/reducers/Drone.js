import * as actions from '../actions';

const initialState = {
  loading: false,
  drones: [],
  currentDrone: 0
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneDataReceived = (state, action) => {
  const { data } = action;
  return {
    ...state,
    loading: false,
    drones: data.data
  };
};

const nextDrone = (state, action) => {
  let currentDrone = state.currentDrone;
  if (state.currentDrone < state.drones.length) {
    currentDrone += 1;
  }
  console.log(currentDrone);
  return {
    ...state,
    currentDrone,
  };
};

const handlers = {
  [actions.FETCH_DRONE]: startLoading,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
  [actions.NEXT_DRONE]: nextDrone
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};