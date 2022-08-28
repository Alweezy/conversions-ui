import unitOptionsSliceReducer from './unitOptions';
import measurementOptionsSliceReducer from './measumentOptions';
import inputValuesSliceReducer from './inputValues';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    unitOptionsSliceReducer,
    measurementOptionsSliceReducer,
    inputValuesSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;

// export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;

// export const wrapper = createWrapper<AppState>(() => store);
