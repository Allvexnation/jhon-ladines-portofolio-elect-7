export function getThemeColors(isDarkMode: boolean) {
  return {
    background: isDarkMode ? '#0a0a0a' : '#ffffff',
    card: isDarkMode ? '#1a1a1a' : '#f5f5f5',
    border: isDarkMode ? '#333333' : '#e5e5e5',
  };
}
