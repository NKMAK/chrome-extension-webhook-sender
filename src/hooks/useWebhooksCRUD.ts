import { useState, useEffect } from "react";
import type { Webhook } from "../types/webhook";
import {
  getWebhooks,
  addWebhook,
  removeWebhook,
  updateWebhook,
} from "../utils/storage";

export const useWebhooksCRUD = () => {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(true);

  const loadWebhooks = async () => {
    try {
      const data = await getWebhooks();
      setWebhooks(data);
    } catch (error) {
      console.error("Failed to load webhooks:", error);
    } finally {
      setLoading(false);
    }
  };

  const createWebhook = async (webhook: Webhook) => {
    try {
      await addWebhook(webhook);
      await loadWebhooks();
    } catch (error) {
      console.error("Failed to create webhook:", error);
    }
  };

  const deleteWebhook = async (id: string) => {
    try {
      await removeWebhook(id);
      await loadWebhooks();
    } catch (error) {
      console.error("Failed to delete webhook:", error);
    }
  };

  const editWebhook = async (id: string, updatedWebhook: Partial<Webhook>) => {
    try {
      await updateWebhook(id, updatedWebhook);
      await loadWebhooks();
    } catch (error) {
      console.error("Failed to update webhook:", error);
    }
  };

  useEffect(() => {
    loadWebhooks();
  }, []);

  return {
    webhooks,
    loading,
    createWebhook,
    deleteWebhook,
    editWebhook,
    refreshWebhooks: loadWebhooks,
  };
};
