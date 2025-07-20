import { useState, useEffect } from "react";

export const useSelectedText = () => {
  const [selectedText, setSelectedText] = useState<string>("");

  useEffect(() => {
    const getSelectedText = async () => {
      try {
        const result = await chrome.storage.local.get("selectedText");
        if (result.selectedText) {
          setSelectedText(result.selectedText);
          chrome.storage.local.remove("selectedText");
        }
      } catch (error) {
        console.error("Failed to get selected text:", error);
      }
    };

    getSelectedText();
  }, []);

  return { selectedText };
};
