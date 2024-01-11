/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    setFavoriteData: (state, action) => {
      const existingIndex = state.favorite.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.favorite[existingIndex] = {
          ...state.favorite[existingIndex],
        };
      } else {
        const tempProductItem = { ...action.payload };
        if (tempProductItem.id) {
          state.favorite.push(tempProductItem);
        }
      }
    },
    setFavoriteDelete: (state, action) => {
      const index = state.favorite.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.favorite.splice(index, 1);
      }
    },
    setFavoriteRemove: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setFavoriteData, setFavoriteDelete, setFavoriteRemove } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
