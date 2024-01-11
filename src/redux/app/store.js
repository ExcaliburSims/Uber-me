/* eslint-disable import/no-extraneous-dependencies */
import {
  configureStore,
  serializableMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  FLUSH,
  REGISTER,
  PAUSE,
  PERSIST,
  REHYDRATE,
} from "redux-persist";
import articlesReducer from "../feature/articles.slice";
import favoriteReducer from "../feature/favorite.slice";
import commandesReducer from "../feature/commandes.slice";

const reducers = combineReducers({
  articles: articlesReducer,
  favorite: favoriteReducer,
  commandes: commandesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, PAUSE, PERSIST, REHYDRATE],
      },
    })
      .filter((middleware) => middleware !== serializableMiddleware)
      .concat(logger),
});
