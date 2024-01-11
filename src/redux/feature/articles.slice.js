/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: null,
  },
  reducers: {
    setArticlesData: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticlesData } = articlesSlice.actions;
export default articlesSlice.reducer;
