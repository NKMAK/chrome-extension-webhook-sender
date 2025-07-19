import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  List,
} from "@chakra-ui/react";
import { useWebhooksCRUD } from "../../hooks/useWebhooksCRUD";
import { WebhookForm } from "./WebhookForm";
import type { Webhook } from "../../types/webhook";

export const SettingsPage: React.FC = () => {
  const { webhooks, loading, createWebhook, deleteWebhook } = useWebhooksCRUD();

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

      <WebhookForm onSubmit={handleAddWebhook} />

      <Box>
        <Heading size="md" mb={4}>
          Registered Webhooks:
        </Heading>
        {webhooks.length === 0 ? (
          <Text color="gray.500">No webhooks registered yet.</Text>
        ) : (
          <List.Root gap={3}>
            {webhooks.map((webhook) => (
              <List.Item key={webhook.id}>
                <HStack gap={3} align="center">
                  <Box w={4} h={4} bg={webhook.color} borderRadius="sm" />
                  <VStack align="start" gap={0} flex={1}>
                    <Text fontWeight="bold">{webhook.name}</Text>
                  </VStack>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDeleteWebhook(webhook.id)}
                  >
                    Delete
                  </Button>
                </HStack>
              </List.Item>
            ))}
          </List.Root>
        )}
      </Box>
    </VStack>
  );
};
