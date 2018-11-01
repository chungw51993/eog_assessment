import { connect } from 'react-redux';

import * as actions from "../actions";

const mapState = (state, ownProps) => {
  const {
    loading,
    drones,
  } = state.drone;
  return {
    loading,
    drones,
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE
    }),
  nextDrone: () =>
    dispatch({
      type: actions.NEXT_DRONE
    })
});

export default connect(
  mapState,
  mapDispatch,
);
