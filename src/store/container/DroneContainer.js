import { connect } from 'react-redux';

import * as actions from "../actions";

const mapState = (state, ownProps) => {
  const {
    loading,
    drones,
    currentDrone,
    interval,
    weather
  } = state.drone;
  return {
    loading,
    drones,
    currentDrone,
    interval,
    weather
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE
    }),
  loadWeather: (lat, lng) =>
    dispatch({
      type: actions.FETCH_WEATHER,
      longitude: lng,
      latitude: lat,
      drone: true
    })
});

export default connect(
  mapState,
  mapDispatch,
);
