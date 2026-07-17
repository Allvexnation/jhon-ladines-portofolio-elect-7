export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
  compact?: boolean;
  isDarkMode?: boolean;
}

export interface SideBarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  navLayout?: 'sidebar' | 'topbar';
  setNavLayout?: (layout: 'sidebar' | 'topbar') => void;
}
