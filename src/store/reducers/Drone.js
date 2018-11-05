import * as actions from '../actions';

const initialState = {
  loading: false,
  drones: [],
  currentDrone: 0,
  interval: false,
};

const toF = c => (c * 9) / 5 + 32;

const startLoading = (state, action) => {
  let loading = false;
  if (state.drones.length === 0) {
    loading = true;
  }
  return { ...state, loading };
};

const droneDataReceived = (state, action) => {
  const { data } = action;
  let interval = false;
  if (state.drones.length !== 0) {
    interval = true;
  }
  return {
    ...state,
    loading: false,
    drones: data,
    currentDrone: data.length - 1,
    interval,
  };
};

const droneWeatherDataReceived = (state, action) => {
  const { data } = action;
  if (!data["consolidated_weather"]) return state;
  const weather = data.consolidated_weather[0];
  const { weather_state_name, the_temp } = weather;
  const { title: name } = data;
  return {
    ...state,
    weather: {
      temperatureinCelsius: the_temp,
      temperatureinFahrenheit: toF(the_temp),
      weather_state_name,
      name,
      data
    }
  };
}

const handlers = {
  [actions.FETCH_DRONE]: startLoading,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
  [actions.DRONE_WEATHER_DATA_RECEIVED]: droneWeatherDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};