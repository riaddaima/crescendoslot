import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import login from '../components/Login/reducer';
import calendar from '../pages/Events/reducer';
import selectedEvents from '../components/selectedEvents/reducer';
import { injectStore } from '../helpers/API';

export const store = configureStore({
  reducer: {
    login,
    calendar,
    selectedEvents,
  },
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
