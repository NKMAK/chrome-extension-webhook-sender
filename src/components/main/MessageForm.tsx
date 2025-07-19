import React from "react";
import { Box, Textarea, Text, HStack } from "@chakra-ui/react";
import { LuMessageSquare } from "react-icons/lu";

type MessageFormProps = {
  onMessageChange: (message: string) => void;
  message: string;
};

export const MessageForm: React.FC<MessageFormProps> = ({
  onMessageChange,
  message,
}) => {
  return (
    <Box
      bg="green.50"
      borderLeft="4px solid"
      borderColor="green.500"
      pl={4}
      pr={4}
      py={3}
      borderRadius="md"
    >
      <HStack mb={3} gap={2} align="center" justify="space-between">
        <HStack gap={2} align="center">
          <LuMessageSquare size={16} color="var(--chakra-colors-green-700)" />
          <Text fontSize="sm" fontWeight="semibold" color="green.700">
            Message
          </Text>
        </HStack>
        {message.length > 0 && (
          <Text fontSize="xs" color="gray.500">
            {message.length} chars
          </Text>
        )}
      </HStack>
      <Textarea
        id="message"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="Type your message here..."
        rows={4}
        bg="white"
        borderRadius="md"
        border="1px solid"
        borderColor="green.200"
        _focus={{
          borderColor: "green.500",
          boxShadow: "0 0 0 1px var(--chakra-colors-green-500)"
        }}
        _placeholder={{ color: "gray.400" }}
      />
    </Box>
  );
};
