// Importing the createSlice function from Redux Toolkit to create a slice of the state
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [],  // The cart starts as an empty array of items
};

// Creating the cart slice with reducers that handle actions to modify the cart
const cartSlice = createSlice({
  name: 'cart',  // Name of the slice
  initialState,  // The initial state of the cart
  reducers: {
    // Action to add or update a product in the cart
    addToCart: (state, action) => {
      const { id, title, price, imageUrl, selectedOption } = action.payload;

      // Check if the product already exists in the cart based on id and selectedOption
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === id && item.selectedOption === selectedOption
      );

      if (existingProductIndex >= 0) {
        // If the product already exists, increase its quantity by 1
        state.items[existingProductIndex].quantity += 1;
      } else {
        // If it's a new product, add it to the cart with an initial quantity of 1
        state.items.push({
          id,
          title,
          price,
          imageUrl,
          selectedOption,
          quantity: 1,  // New product gets a quantity of 1
        });
      }
    },

    // Action to remove a product from the cart based on the product id
    removeFromCart: (state, action) => {
      // Filter out the product with the given id
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Action to update the quantity of a product in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      // Find the product in the cart by id
      const product = state.items.find((item) => item.id === id);
      
      // If the product is found, update its quantity
      if (product) {
        product.quantity = parseInt(quantity, 10);  // Ensuring the quantity is an integer
      }
    },
  },
});

// Exporting the actions so they can be dispatched elsewhere in the app
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Exporting the reducer to be added to the store
export default cartSlice.reducer;
