import { useState } from "react";
import { ChakraProvider, Box, Stack, defaultSystem } from "@chakra-ui/react";
import { MessageForm } from "./components/main/MessageForm";
import { SendButton } from "./components/main/SendButton";

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    setIsLoading(true);
    alert("send button");
    setIsLoading(false);
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={4}>
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
