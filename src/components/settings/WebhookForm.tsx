import React, { useState } from "react";
import { Box, Button, Input, VStack, Field } from "@chakra-ui/react";
import type { Webhook } from "../../types/webhook";

type WebhookFormProps = {
  onSubmit: (webhook: Webhook) => void;
};

export const WebhookForm: React.FC<WebhookFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#FF5733");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && url) {
      const webhook: Webhook = {
        id: Date.now().toString(),
        name,
        url,
        color,
      };
      onSubmit(webhook);
      setName("");
      setUrl("");
      setColor("#FF5733");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack gap={4}>
        <Field.Root required>
          <Field.Label>Name</Field.Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="memo"
          />
        </Field.Root>

        <Field.Root required>
          <Field.Label>URL</Field.Label>
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Color</Field.Label>
          <Input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Field.Root>

        <Button type="submit" colorScheme="blue" width="full">
          Add Webhook
        </Button>
      </VStack>
    </Box>
  );
};
