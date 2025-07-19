import type { Webhook } from "../types/webhook";

const getStorageKey = () =>
  import.meta.env.VITE_WEBHOOK_STORAGE_KEY || "webhooks";

export const getWebhooks = async (): Promise<Webhook[]> => {
  const result = await chrome.storage.sync.get(getStorageKey());
  return result[getStorageKey()] || [];
};

export const saveWebhooks = async (webhooks: Webhook[]): Promise<void> => {
  await chrome.storage.sync.set({ [getStorageKey()]: webhooks });
};

export const addWebhook = async (webhook: Webhook): Promise<void> => {
  const webhooks = await getWebhooks();
  webhooks.push(webhook);
  await saveWebhooks(webhooks);
};

export const removeWebhook = async (id: string): Promise<void> => {
  const webhooks = await getWebhooks();
  const filtered = webhooks.filter((w) => w.id !== id);
  await saveWebhooks(filtered);
};

export const updateWebhook = async (
  id: string,
  updatedWebhook: Partial<Webhook>
): Promise<void> => {
  const webhooks = await getWebhooks();
  const index = webhooks.findIndex((w) => w.id === id);
  if (index !== -1) {
    webhooks[index] = { ...webhooks[index], ...updatedWebhook };
    await saveWebhooks(webhooks);
  }
};
