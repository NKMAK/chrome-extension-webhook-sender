import type { Platform } from "../types/webhook";

export const validateWebhookUrl = (
  url: string,
  platform?: Platform
): { isValid: boolean; error?: string } => {
  if (!url) {
    return { isValid: false, error: "URL is required" };
  }

  const isSlackWebhook = url.includes("hooks.slack.com");
  const isDiscordWebhook = url.includes("discord.com/api/webhooks");

  if (!isSlackWebhook && !isDiscordWebhook) {
    return {
      isValid: false,
      error: "Please enter a valid Discord or Slack webhook URL",
    };
  }

  if (platform === "slack" && !isSlackWebhook) {
    return {
      isValid: false,
      error: "Please enter a valid Slack webhook URL (hooks.slack.com)",
    };
  }

  if (platform === "discord" && !isDiscordWebhook) {
    return {
      isValid: false,
      error:
        "Please enter a valid Discord webhook URL (discord.com/api/webhooks)",
    };
  }

  return { isValid: true };
};

export const isValidWebhookUrl = (url: string): boolean => {
  const isSlackWebhook = url.includes("hooks.slack.com");
  const isDiscordWebhook = url.includes("discord.com/api/webhooks");
  return isSlackWebhook || isDiscordWebhook;
};
