import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Field,
  NativeSelect,
  Text,
} from "@chakra-ui/react";
import type { Webhook, Platform } from "../../types/webhook";
import { validateWebhookUrl } from "../../utils/validation";

type WebhookFormProps = {
  onSubmit: (webhook: Webhook) => void;
};

export const WebhookForm: React.FC<WebhookFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState<Platform>("discord");
  const [urlError, setUrlError] = useState("");

  const handleUrlChange = (value: string) => {
    setUrl(value);
    const validation = validateWebhookUrl(value, platform);
    setUrlError(validation.error || "");
  };

  const handlePlatformChange = (newPlatform: Platform) => {
    setPlatform(newPlatform);
    const validation = validateWebhookUrl(url, newPlatform);
    setUrlError(validation.error || "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && url && !urlError) {
      const webhook: Webhook = {
        id: Date.now().toString(),
        name,
        url,
        platform,
      };
      onSubmit(webhook);
      setName("");
      setUrl("");
      setPlatform("discord");
      setUrlError("");
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
            autoComplete="off"
          />
        </Field.Root>

        <Field.Root required>
          <Field.Label>Webhook URL</Field.Label>
          <Input
            type="url"
            value={url}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="https://..."
            autoComplete="off"
            borderColor={urlError ? "red.500" : "gray.200"}
          />
          {urlError && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {urlError}
            </Text>
          )}
        </Field.Root>

        <Field.Root required>
          <Field.Label>Platform</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              value={platform}
              onChange={(e) => handlePlatformChange(e.target.value as Platform)}
            >
              <option value="discord">Discord</option>
              <option value="slack">Slack</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Button
          type="submit"
          disabled={!name || !url || !!urlError}
          bg="blue.500"
          color="white"
          _hover={{ bg: "blue.500" }}
          _active={{ bg: "blue.500" }}
          border="1px solid"
          borderColor="blue.500"
          borderRadius="md"
          width="full"
          py={3}
        >
          Add Webhook
        </Button>
      </VStack>
    </Box>
  );
};
