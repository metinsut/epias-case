import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appReducer';

const store = configureStore({
  reducer: {
    app: appSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
