import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeState {
  currentTheme: Theme;
}

// Get theme from localStorage or default to theme1
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme');
  return (savedTheme as Theme) || 'theme1';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer; 