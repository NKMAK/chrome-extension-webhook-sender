import React from 'react';
import { Box, Text, Textarea } from '@chakra-ui/react';

type MessageFormProps = {
  onMessageChange: (message: string) => void;
  message: string;
};

export const MessageForm: React.FC<MessageFormProps> = ({
  onMessageChange,
  message
}) => {
  return (
    <Box>
      <Text>Message:</Text>
      <Textarea
        id="message"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="Enter your message to send"
        rows={4}
      />
    </Box>
  );
};