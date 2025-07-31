import type { Theme } from '../store/themeSlice';

export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  theme1: {
    name: 'Theme 1',
    colors: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      text: '#1E293B',
      textSecondary: '#64748B',
      accent: '#EF4444',
      border: '#E2E8F0',
    },
  },
  theme2: {
    name: 'Theme 2',
    colors: {
      primary: '#10B981',
      secondary: '#059669',
      background: '#F0FDF4',
      surface: '#FFFFFF',
      text: '#064E3B',
      textSecondary: '#047857',
      accent: '#F59E0B',
      border: '#D1FAE5',
    },
  },
  theme3: {
    name: 'Theme 3',
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      background: '#FAF5FF',
      surface: '#FFFFFF',
      text: '#581C87',
      textSecondary: '#7C3AED',
      accent: '#EC4899',
      border: '#EDE9FE',
    },
  },
}; 