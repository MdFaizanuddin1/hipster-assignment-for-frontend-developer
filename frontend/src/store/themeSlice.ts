import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Defining a type for the theme options.
// This ensures that only the allowed theme values (theme1, theme2, theme3) can be used.
export type Theme = 'theme1' | 'theme2' | 'theme3';

// Interface representing the structure of the theme state. 
interface ThemeState {
  currentTheme: Theme;
}

// Get theme from localStorage or default to theme1
// Function to get the initial theme from localStorage.
// Defaults to 'theme1' if no theme is stored.
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme');
  return (savedTheme as Theme) || 'theme1';
};

// Initial state for the theme slice.
// Uses the getInitialTheme function to determine the default theme.
const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

// Creating a Redux slice for theme management.
// It includes one reducer to set and persist the selected theme.
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action creator to change the current theme.
    // It also saves the new theme to localStorage.
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

// Exporting the action creator to set the theme.
export const { setTheme } = themeSlice.actions;

// Exporting the reducer function for use in the Redux store.
export default themeSlice.reducer; 