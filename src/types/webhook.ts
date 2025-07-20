export type Platform = 'discord' | 'slack';

export type Webhook = {
  id: string;
  name: string;
  url: string;
  platform: Platform;
};

export type WebhooksCRUD = {
  webhooks: Webhook[];
  loading: boolean;
  createWebhook: (webhook: Webhook) => Promise<void>;
  deleteWebhook: (id: string) => Promise<void>;
  editWebhook: (id: string, updatedWebhook: Partial<Webhook>) => Promise<void>;
  refreshWebhooks: () => Promise<void>;
};