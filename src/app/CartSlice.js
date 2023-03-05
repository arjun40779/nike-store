import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false, // useState
  //   cartItems: [],
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // ako item vec postoji onda samo povecaj broj za jedan
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item quantity increased`);
      } else {
        // ako ne postoji onda ga dodaj u korpu
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp); // action.payload - item

        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { setCloseCart, setOpenCart, setAddItemToCart } =
  CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export default CartSlice.reducer;
