# Chrome Extension Webhook Sender

A Chrome extension that allows you to quickly send the current page URL, title, and custom messages to Discord or Slack webhooks with a simple click.

## 👀 Demo
<img src="https://github.com/user-attachments/assets/f8367f8c-dda5-45c2-a2b4-962f6f257d14" alt="webhook-sender-demo" width="800"/>

## ✨ Features

- **Webhook Support**: Store and manage Discord and Slack webhook URLs
- **Current Page Integration**: Automatically includes current page title and URL in messages
- **Context Menu Integration**: Right-click on any page to quickly access the extension
- **Platform-Specific Formatting**: Optimized message formats for Discord and Slack


## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Google Chrome browser

### Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/NKMAK/chrome-extension-webhook-sender.git
   cd chrome-extension-webhook-sender
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the extension**

   ```bash
   npm run build
   ```

4. **Install extension locally in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked" and select the `dist` folder

### Development Server

```bash
npm run dev
```

The development server provides hot reload for faster development.

## 📖 How to Use

### 1. Setting Up Webhooks

1. Click the extension icon in your browser toolbar
2. Navigate to the "Settings" tab
3. Add your webhook URLs:
   - **Discord**
   - **Slack**
4. Give each webhook a descriptive name for easy identification

### 2. Sending Messages

1. **Via Extension Popup**:
   - Click the extension icon
   - Select your desired webhook from the dropdown
   - Type your message
   - Click "Send"

2. **Via Context Menu**:
   - Select text on any webpage and right-click
   - Choose "webhook-sender" from the context menu
   - The extension will open with the selected text pre-filled in the message field

### 3. Message Format

Messages automatically include:

- Your custom message text
- Current page title
- Current page URL

**Example output:**

```
Your custom message here

Title: GitHub - NKMAK/chrome-extension-webhook-sender
URL: https://github.com/NKMAK/chrome-extension-webhook-sender
```

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite + CRXJS (Chrome Extension plugin)
- **UI Library**: Chakra UI v3
- **Extension API**: Chrome Manifest V3
- **Storage**: chrome.storage.sync (syncs across devices)

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🐛 Issues

[open an issue](https://github.com/NKMAK/chrome-extension-webhook-sender/issues) on GitHub.
