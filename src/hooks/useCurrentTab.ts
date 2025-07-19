import { useState, useEffect } from "react";

type TabInfo = {
  url?: string;
  title?: string;
};

export const useCurrentTab = () => {
  const [tabInfo, setTabInfo] = useState<TabInfo>({});
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentTab = async () => {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      setTabInfo({
        url: tab.url,
        title: tab.title,
      });
    } catch (error) {
      console.error("Failed to get current tab:", error);
      setTabInfo({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrentTab();
  }, []);

  return {
    tabInfo,
    isLoading,
    refreshTab: getCurrentTab,
  };
};
