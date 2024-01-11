/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const commandesSlice = createSlice({
  name: "commandes",
  initialState: {
    commandes: [],
    totalQuantity: 0,
    totalPrice: 0,
    quantity: 1,
  },
  reducers: {
    addCommandes: (state, action) => {
      const find = state.commandes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.commandes[find].quantity += 1;
      } else {
        const tempProductItem = { ...action.payload, quantity: 1 };
        state.commandes.push(tempProductItem);
      }
    },

    getCommandesTotal: (state) => {
      const { totalQuantity, totalPrice } = state.commandes.reduce(
        (commandesTotal, commandesItem) => {
          const { price, quantity } = commandesItem;
          const itemTotal = price * quantity;
          commandesTotal.totalPrice += itemTotal;
          commandesTotal.totalQuantity += quantity;
          return commandesTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
          quantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2), 10);
      state.totalQuantity = totalQuantity;
    },
    increaseItemQuantity: (state, action) => {
      state.commandes = state.commandes.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.commandes = state.commandes.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    deleteCommandes: (state, action) => {
      state.commandes = state.commandes.filter(
        (cart) => cart.id !== action.payload
      );
    },
  },
});

export const {
  addCommandes,
  deleteCommandes,
  getCommandesTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
} = commandesSlice.actions;
export default commandesSlice.reducer;
