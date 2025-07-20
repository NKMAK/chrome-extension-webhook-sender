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

export const getPlatformColor = (platform: Platform): string => {
  switch (platform) {
    case 'discord':
      return '#5865F2';
    case 'slack':
      return '#4A154B';
    default:
      return '#5865F2';
  }
};