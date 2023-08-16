import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  builderProducts: [],
};

const prodcutSlice = createSlice({
  name: "builderProducts",
  initialState,
  reducers: {
    addBuilderProduct: (state, action) => {
      const product = action.payload;

      const isExist = state.builderProducts.filter(
        (bp) => bp._id === product._id
      );

      if (!isExist?.length) {
        state.builderProducts.push(product);
      }
    },
    removeBuilderProduct: (state) => {
      state.builderProducts = [];
    },
  },
});

export const { addBuilderProduct, removeBuilderProduct } = prodcutSlice.actions;
export default prodcutSlice.reducer;
