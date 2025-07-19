import { useState } from "react";
import { ChakraProvider, Box, Stack, Button, HStack, defaultSystem } from "@chakra-ui/react";
import { MessageForm } from "./components/main/MessageForm";
import { SendButton } from "./components/main/SendButton";
import { SettingsPage } from "./components/settings/SettingsPage";
import { useSender } from "./hooks/useSender";
import { useCurrentTab } from "./hooks/useCurrentTab";

function App() {
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState<"main" | "settings">("main");
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
          <HStack gap={2} mb={4}>
            <Button
              variant={currentPage === "main" ? "solid" : "outline"}
              onClick={() => setCurrentPage("main")}
              size="sm"
            >
              Main
            </Button>
            <Button
              variant={currentPage === "settings" ? "solid" : "outline"}
              onClick={() => setCurrentPage("settings")}
              size="sm"
            >
              Settings
            </Button>
          </HStack>

          {currentPage === "main" ? (
            <>
              <MessageForm message={message} onMessageChange={setMessage} />
              <SendButton
                onSend={handleSend}
                disabled={!message.trim()}
                isLoading={isLoading}
              />
            </>
          ) : (
            <SettingsPage />
          )}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
