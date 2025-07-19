export type Platform = 'discord' | 'slack';

export type Webhook = {
  id: string;
  name: string;
  url: string;
  platform: Platform;
};