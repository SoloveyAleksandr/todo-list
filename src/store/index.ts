import { configureStore, createSlice } from '@reduxjs/toolkit';

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    activePageName: 'Мой список дел',
  },

  reducers: {
    setActivePageName(state, action) {
      state.activePageName = action.payload;
    }
  },
});

export const { } = AppStore.actions;

export default configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});
