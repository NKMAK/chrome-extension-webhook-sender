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
      bg={"blue.500"}
      color="white"
      _hover={{ bg: "blue.500" }}
      _active={{ bg: "blue.500" }}
      border="1px solid"
      borderColor="blue.500"
      borderRadius="md"
      py={3}
    >
      Send
    </Button>
  );
};
