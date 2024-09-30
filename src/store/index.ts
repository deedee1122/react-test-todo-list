import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { systemSlice, taskSlice } from "./Slices";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  systemSlice.reducer,
);

const persistedTaskReducer = persistReducer(persistConfig, taskSlice.reducer);

export const store = configureStore({
  reducer: {
    [systemSlice.name]: persistedSystemReducer,
    [taskSlice.name]: persistedTaskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export const persistedStore = persistStore(store);

setupListeners(store.dispatch);

// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export * from "./Slices";
export * from "./hooks";
export * from "./initialStates";
