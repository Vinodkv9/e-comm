import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    //  REMOVE FROM CART
    // ------------------------
    removeFromCart(state, action) {
      const id = action.payload;
      const finditem = state.products.find((item) => item.id === id);
      if (finditem) {
        state.totalPrice -= finditem.totalPrice;
        state.totalPrice -= finditem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    // INCREASE AND DECREASE PRODUCT QUANTITY
    // ---------------------------------------------------
    increaseQuantity(state, action) {
      const id = action.payload;
      const finditem = state.products.find((item) => item.id === id);
      if (finditem) {
        finditem.quantity++;
        finditem.totalPrice += finditem.price;
        state.totalQuantity++;
        state.totalPrice += finditem.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const finditem = state.products.find((item) => item.id === id);
      if(finditem.quantity > 1) {
          if (finditem) {
            finditem.quantity--;
            finditem.totalPrice -= finditem.price;
            state.totalQuantity--;
            state.totalPrice -= finditem.price;
          }
      }
    },

  },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer;
