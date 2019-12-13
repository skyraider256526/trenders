import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";

import rootSaga from "./root-saga";

// import { fetchCollectionsStart } from "./shop/shop.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

//If the application is in production(deployed) phase it doesn't include logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
