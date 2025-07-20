import React from "react";
import { Heading, VStack, Card, Text } from "@chakra-ui/react";
import { WebhookForm } from "../components/settings/WebhookForm";
import { WebhookList } from "../components/settings/WebhookList";
import type { Webhook, WebhooksCRUD } from "../types/webhook";

type SettingsPageProps = {
  webhooksCRUD: WebhooksCRUD;
};

export const SettingsPage: React.FC<SettingsPageProps> = ({ webhooksCRUD }) => {
  const { webhooks, loading, createWebhook, deleteWebhook } = webhooksCRUD;

  const handleAddWebhook = (webhook: Webhook) => {
    createWebhook(webhook);
  };

  const handleDeleteWebhook = (id: string) => {
    deleteWebhook(id);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <VStack gap={6} align="stretch" p={4}>
      <Heading size="lg">Webhook Settings</Heading>

      <Card.Root p={6} bg="blue.50" borderColor="blue.200">
        <Heading size="md" mb={4} color="blue.700">
          Add New Webhook
        </Heading>
        <WebhookForm onSubmit={handleAddWebhook} />
      </Card.Root>

      <WebhookList webhooks={webhooks} onDelete={handleDeleteWebhook} />
    </VStack>
  );
};
