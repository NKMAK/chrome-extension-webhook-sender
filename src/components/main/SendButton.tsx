import React from "react";
import { Button } from "@chakra-ui/react";

type SendButtonProps = {
  onSend: () => void;
  disabled: boolean;
  isLoading: boolean;
};

export const SendButton: React.FC<SendButtonProps> = ({
  onSend,
  disabled,
  isLoading,
}) => {
  return (
    <Button
      onClick={onSend}
      disabled={disabled}
      loading={isLoading}
      loadingText="Sending"
    >
      Send
    </Button>
  );
};
