import {createEpicMiddleware} from 'redux-observable';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootSlice from './slice';
import {RootEpic} from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    rootSlice: rootSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(epicMiddleware),
});

epicMiddleware.run(RootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
