import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import droneReducer from "./reducers/Drone";

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    drone: droneReducer,
    routing: routerReducer
  });

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagas.forEach(sagaMiddleware.run);

  return store;
};
