import { useState } from 'react';

export const useTabSwitcher = (defaultTab: string) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    switchTab
  };
};