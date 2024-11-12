// Importing necessary functions from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing the cart reducer that will manage the state related to the shopping cart
import cartReducer from './features/cart/cartSlice';  

// Creating the Redux store using configureStore function from Redux Toolkit
const store = configureStore({
  reducer: {
    // Adding the cart reducer to the store. This allows us to manage
    // the state related to the cart through actions dispatched to the `cart` slice
    cart: cartReducer,  
  },
});

// Exporting the store so it can be used in the root component of the app
export default store;
