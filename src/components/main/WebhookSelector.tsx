import React from "react";
import { Box, Text, HStack, Button, Menu } from "@chakra-ui/react";
import type { Webhook } from "../../types/webhook";

type WebhookSelectorProps = {
  webhooks: Webhook[];
  selectedWebhookId?: string;
  onWebhookSelect: (webhookId?: string) => void;
  loading?: boolean;
};

export const WebhookSelector: React.FC<WebhookSelectorProps> = ({
  webhooks,
  selectedWebhookId,
  onWebhookSelect,
  loading = false,
}) => {
  const selectedWebhook = webhooks.find((w) => w.id === selectedWebhookId);

  if (loading) {
    return (
      <Box>
        <Text mb={2} fontSize="sm" fontWeight="medium">
          Send to:
        </Text>
        <Button variant="outline" size="sm" disabled width="full">
          Loading webhooks...
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Text mb={2} fontSize="sm" fontWeight="medium">
        Send to:
      </Text>
      <HStack gap={2} align="center">
        {selectedWebhook && (
          <Box
            w={3}
            h={3}
            bg={selectedWebhook.color}
            borderRadius="sm"
            flexShrink={0}
          />
        )}
        <Menu.Root>
          <Menu.Trigger
            disabled={loading}
            width="full"
            textAlign="start"
            px={3}
            py={2}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            bg="white"
            _hover={{ bg: "gray.50" }}
            cursor="pointer"
          >
            {selectedWebhook ? selectedWebhook.name : "Select webhook..."}
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item
                value="none"
                onClick={() => onWebhookSelect(undefined)}
              >
                No webhook selected
              </Menu.Item>
              {webhooks.map((webhook) => (
                <Menu.Item
                  key={webhook.id}
                  value={webhook.id}
                  onClick={() => onWebhookSelect(webhook.id)}
                >
                  <HStack gap={2}>
                    <Box w={2} h={2} bg={webhook.color} borderRadius="sm" />
                    <Text>{webhook.name}</Text>
                  </HStack>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </HStack>
    </Box>
  );
};
