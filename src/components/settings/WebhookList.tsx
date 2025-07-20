import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Badge,
  Input,
} from "@chakra-ui/react";
import { getPlatformColor } from "../../utils/pipeline";
import type { Webhook } from "../../types/webhook";

type WebhookListProps = {
  webhooks: Webhook[];
  onDelete: (id: string) => void;
};

export const WebhookList: React.FC<WebhookListProps> = ({
  webhooks,
  onDelete,
}) => {
  return (
    <Box>
      <Heading size="md" mb={4}>
        Registered Webhooks ({webhooks.length})
      </Heading>
      {webhooks.length === 0 ? (
        <Card.Root p={6} textAlign="center">
          <Text color="gray.500">No webhooks registered yet.</Text>
        </Card.Root>
      ) : (
        <VStack gap={3}>
          {webhooks.map((webhook) => (
            <Card.Root key={webhook.id} p={4} width="full" bg="gray.50" borderColor="gray.200">
              <VStack gap={3} align="stretch">
                <HStack justify="space-between" align="center">
                  <HStack gap={3} align="center">
                    <Badge
                      bg={getPlatformColor(webhook.platform)}
                      color="white"
                      textTransform="uppercase"
                      fontSize="xs"
                      px={2}
                      py={1}
                    >
                      {webhook.platform}
                    </Badge>
                    <Text fontWeight="bold" fontSize="md">
                      {webhook.name}
                    </Text>
                  </HStack>
                  <Button
                    size="sm"
                    bg="red.500"
                    color="white"
                    _hover={{ bg: "red.600" }}
                    _active={{ bg: "red.700" }}
                    border="1px solid"
                    borderColor="red.500"
                    borderRadius="md"
                    px={4}
                    py={2}
                    onClick={() => onDelete(webhook.id)}
                  >
                    Delete
                  </Button>
                </HStack>
                <Input
                  value={webhook.url}
                  readOnly
                  fontSize="sm"
                  color="gray.600"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ borderColor: "gray.300" }}
                  cursor="text"
                />
              </VStack>
            </Card.Root>
          ))}
        </VStack>
      )}
    </Box>
  );
};