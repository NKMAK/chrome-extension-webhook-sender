import { ChakraProvider, Box, defaultSystem, Tabs } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import { SettingsPage } from "./pages/SettingsPage";
import { useWebhooksCRUD } from "./hooks/useWebhooksCRUD";

function App() {
  const webhooksCRUD = useWebhooksCRUD();

  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={4} minW="400px" maxW="500px">
        <Tabs.Root defaultValue="main" variant="enclosed">
          <Tabs.List>
            <Tabs.Trigger value="main">Main</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="main" pt={4}>
            <MainPage webhooksCRUD={webhooksCRUD} />
          </Tabs.Content>

          <Tabs.Content value="settings" pt={4}>
            <SettingsPage webhooksCRUD={webhooksCRUD} />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </ChakraProvider>
  );
}

export default App;
