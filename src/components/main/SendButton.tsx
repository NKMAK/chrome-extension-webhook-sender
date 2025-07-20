import React from "react";
import { Button } from "@chakra-ui/react";

type SendButtonProps = {
  onSend: () => void;
  disabled: boolean;
  isLoading: boolean;
  hasWebhookSelected: boolean;
};

export const SendButton: React.FC<SendButtonProps> = ({
  onSend,
  disabled,
  isLoading,
  hasWebhookSelected,
}) => {
  return (
    <Button
      onClick={onSend}
      disabled={disabled || !hasWebhookSelected}
      loading={isLoading}
      loadingText="Sending"
      bg={hasWebhookSelected ? "blue.500" : "gray.300"}
      color="white"
      _hover={{ bg: hasWebhookSelected ? "blue.600" : "gray.400" }}
      _active={{ bg: hasWebhookSelected ? "blue.700" : "gray.500" }}
      border="1px solid"
      borderColor={hasWebhookSelected ? "blue.500" : "gray.300"}
      borderRadius="md"
      py={3}
    >
      {hasWebhookSelected ? "Send" : "Select webhook to send"}
    </Button>
  );
};
