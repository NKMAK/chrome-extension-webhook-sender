import React from "react";
import { Box, Textarea } from "@chakra-ui/react";

type MessageFormProps = {
  onMessageChange: (message: string) => void;
  message: string;
};

export const MessageForm: React.FC<MessageFormProps> = ({
  onMessageChange,
  message,
}) => {
  return (
    <Box>
      <Textarea
        id="message"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="input message"
        rows={4}
      />
    </Box>
  );
};
