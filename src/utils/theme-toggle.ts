'use client';

import { useTheme } from '@/components/theme-provider';

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return { isDarkMode, toggleTheme };
}
