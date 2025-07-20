import React, { useEffect } from "react";
import { Box, Text, HStack, NativeSelect, Button } from "@chakra-ui/react";
import { LuSend } from "react-icons/lu";
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
  useEffect(() => {
    if (webhooks.length > 0 && !selectedWebhookId) {
      onWebhookSelect(webhooks[0].id);
    }
  }, [webhooks, selectedWebhookId, onWebhookSelect]);

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
    <Box
      bg="blue.50"
      borderLeft="4px solid"
      borderColor="blue.500"
      pl={4}
      pr={4}
      py={3}
      borderRadius="md"
      position="relative"
    >
      <HStack mb={3} gap={2} align="center">
        <LuSend size={16} color="var(--chakra-colors-blue-700)" />
        <Text fontSize="sm" fontWeight="semibold" color="blue.700">
          Send to
        </Text>
        {selectedWebhook && (
          <HStack gap={1} ml="auto">
            <Text fontSize="xs" color="gray.600" fontWeight="medium">
              {selectedWebhook.platform}
            </Text>
          </HStack>
        )}
      </HStack>
      <NativeSelect.Root disabled={loading}>
        <NativeSelect.Field
          value={selectedWebhookId ?? ""}
          onChange={(e) => onWebhookSelect(e.target.value ?? undefined)}
          bg="white"
          borderRadius="md"
          border="1px solid"
          borderColor="blue.200"
          _focus={{
            borderColor: "blue.500",
            boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
          }}
        >
          {webhooks.map((webhook) => (
            <option key={webhook.id} value={webhook.id}>
              {webhook.name}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Box>
  );
};
