import { useState } from "react";
import { ChakraProvider, Box, Stack, defaultSystem } from "@chakra-ui/react";
import { MessageForm } from "./components/main/MessageForm";
import { SendButton } from "./components/main/SendButton";
import { useSender } from "./hooks/useSender";
import { useCurrentTab } from "./hooks/useCurrentTab";

function App() {
  const [message, setMessage] = useState("");
  const { sendWebhook, isLoading } = useSender();
  const { tabInfo } = useCurrentTab();

  const handleSend = async () => {
    if (message.trim()) {
      await sendWebhook(message, tabInfo);
    }
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={4} minW="400px" maxW="500px">
        <Stack gap={4}>
          <MessageForm message={message} onMessageChange={setMessage} />
          <SendButton
            onSend={handleSend}
            disabled={!message.trim()}
            isLoading={isLoading}
          />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
