import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Widths = (number | null | undefined)[];

export interface AppState {
  splitWrapperWidths: Widths;
  splitTopWidths: Widths;
  splitBottomWidths: Widths;
}

const initialState: AppState = {
  splitWrapperWidths: [],
  splitTopWidths: [],
  splitBottomWidths: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    splitWrapperWidth: (state, action: PayloadAction<Widths>) => {
      state.splitWrapperWidths = action.payload;
    },
    splitTopDragEnd: (state, action: PayloadAction<Widths>) => {
      state.splitTopWidths = action.payload;
    },
    splitBottomDragEnd: (state, action: PayloadAction<Widths>) => {
      state.splitBottomWidths = action.payload;
    }
  }
});

export const { splitWrapperWidth, splitTopDragEnd, splitBottomDragEnd } = appSlice.actions;

export default appSlice;
