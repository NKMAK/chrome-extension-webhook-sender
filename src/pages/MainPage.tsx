import React, { useState, useEffect } from "react";
import { VStack, createToaster, Toaster } from "@chakra-ui/react";
import { MessageForm } from "../components/main/MessageForm";
import { SendButton } from "../components/main/SendButton";
import { WebhookSelector } from "../components/main/WebhookSelector";
import { useSender } from "../hooks/useSender";
import { useCurrentTab } from "../hooks/useCurrentTab";
import { useSelectedText } from "../hooks/useSelectedText";
import type { Webhook, WebhooksCRUD } from "../types/webhook";

const toaster = createToaster({
  placement: "bottom",
});

type MainPageProps = {
  webhooksCRUD: WebhooksCRUD;
};

export const MainPage: React.FC<MainPageProps> = ({ webhooksCRUD }) => {
  const [message, setMessage] = useState("");
  const [selectedWebhookId, setSelectedWebhookId] = useState<string>();

  const { sendWebhook, isLoading, error } = useSender();
  const { tabInfo } = useCurrentTab();
  const { selectedText } = useSelectedText();
  const { webhooks, loading: webhooksLoading } = webhooksCRUD;

  useEffect(() => {
    if (selectedText && !message) {
      setMessage(selectedText);
    }
  }, [selectedText, message]);

  const selectedWebhook = webhooks.find(
    (w: Webhook) => w.id === selectedWebhookId
  );

  const handleSend = async () => {
    if (message.trim() && selectedWebhook) {
      try {
        await sendWebhook(message, selectedWebhook, tabInfo);
        setMessage("");
        toaster.create({
          title: "Message sent successfully!",
          type: "success",
          duration: 3000,
        });
      } catch {
        toaster.create({
          title: "Failed to send message",
          description: error,
          type: "error",
          duration: 5000,
        });
      }
    }
  };

  return (
    <>
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

      <Toaster toaster={toaster}>
        {(toast) => (
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: toast.type === "success" ? "#22c55e" : "#ef4444",
              color: "white",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            <strong>{toast.title}</strong>
            {toast.description && (
              <div style={{ marginTop: "4px", fontSize: "14px" }}>
                {toast.description}
              </div>
            )}
          </div>
        )}
      </Toaster>
    </>
  );
};
