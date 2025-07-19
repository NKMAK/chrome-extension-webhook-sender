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
      colorScheme={hasWebhookSelected ? "blue" : "gray"}
    >
      {hasWebhookSelected ? "Send" : "Select webhook to send"}
    </Button>
  );
};
