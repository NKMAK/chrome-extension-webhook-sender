import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { MessageForm } from "../components/main/MessageForm";
import { SendButton } from "../components/main/SendButton";
import { WebhookSelector } from "../components/main/WebhookSelector";
import { useSender } from "../hooks/useSender";
import { useCurrentTab } from "../hooks/useCurrentTab";
import { useWebhooksCRUD } from "../hooks/useWebhooksCRUD";

export const MainPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [selectedWebhookId, setSelectedWebhookId] = useState<string>();

  const { sendWebhook, isLoading } = useSender();
  const { tabInfo } = useCurrentTab();
  const { webhooks, loading: webhooksLoading } = useWebhooksCRUD();

  const selectedWebhook = webhooks.find((w) => w.id === selectedWebhookId);

  const handleSend = async () => {
    if (message.trim() && selectedWebhook) {
      await sendWebhook(message, selectedWebhook, tabInfo);
      setMessage("");
    }
  };

  return (
    <VStack gap={5} align="stretch">
      <WebhookSelector
        webhooks={webhooks}
        selectedWebhookId={selectedWebhookId}
        onWebhookSelect={setSelectedWebhookId}
        loading={webhooksLoading}
      />

      <MessageForm message={message} onMessageChange={setMessage} />

      <SendButton
        onSend={handleSend}
        disabled={!message.trim()}
        isLoading={isLoading}
        hasWebhookSelected={!!selectedWebhook}
      />
    </VStack>
  );
};
