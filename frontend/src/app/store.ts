import { Action, configureStore, ThunkAction, combineReducers } from '@reduxjs/toolkit';

import login from '../components/Login/reducer';
import calendar from '../pages/Events/reducer';
import selectedEvents from '../components/selectedEvents/reducer';
import profile from '../components/Profile/reducer';
import { injectStore } from '../helpers/API';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  login,
  calendar,
  selectedEvents,
  profile,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistReducer(persistConfig, persistedReducer),
});

injectStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);
