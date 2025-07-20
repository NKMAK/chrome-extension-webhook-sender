import { useState } from "react";
import type { Webhook } from "../types/webhook";
import { createPayload } from "../utils/pipeline";

type TabInfo = {
  url?: string;
  title?: string;
};

export const useSender = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const sendWebhook = async (
    message: string,
    webhook: Webhook,
    tabInfo?: TabInfo
  ) => {
    setIsLoading(true);
    setError("");

    try {
      if (!webhook?.url) {
        throw new Error("Webhook not selected or URL not configured");
      }

      let finalMessage = message;

      if (tabInfo?.url) {
        const pageTitle = tabInfo?.title;
        const pageUrl = tabInfo?.url;
        finalMessage = `${message}\n\n**Current Page:**\n**Title:** ${pageTitle}\n**URL:** ${pageUrl}`;
      }

      const payload = createPayload(finalMessage, webhook.platform);

      const response = await new Promise<{ success: boolean; error?: string }>(
        (resolve) => {
          chrome.runtime.sendMessage(
            {
              action: "sendWebhook",
              url: webhook.url,
              payload,
            },
            resolve
          );
        }
      );

      if (!response.success) {
        throw new Error(response.error);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      console.error("Send error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendWebhook,
    isLoading,
    error,
    clearError: () => setError(""),
  };
};
