import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from "./slice/authSlice";
import supportSlice from "./slice/supportSlice";
import themeSlice from "./slice/themeSlice";
import userSlice from "./slice/userSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  support: supportSlice,
  theme: themeSlice,
  user: userSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'theme']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
