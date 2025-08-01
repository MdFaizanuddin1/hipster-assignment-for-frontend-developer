// Importing configureStore to create the Redux store,
// and importing the theme reducer to manage theme-related state.
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

// Creating the Redux store with a single reducer for theme management.
// The store is configured with the theme reducer to handle theme-related state.
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Defining the RootState type based on the store's state structure.
// Helps with typed selectors throughout the app.
export type RootState = ReturnType<typeof store.getState>;

// Defining the AppDispatch type for typed dispatch usage across the app.
export type AppDispatch = typeof store.dispatch; 