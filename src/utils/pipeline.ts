import type { Platform } from '../types/webhook';

export const createPayload = (message: string, platform: Platform) => {
  switch (platform) {
    case 'slack':
      return { text: message };
    case 'discord':
      return { content: message };
    default:
      return { content: message };
  }
};