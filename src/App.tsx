import { ChakraProvider, Box, defaultSystem, Tabs } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import { SettingsPage } from "./pages/SettingsPage";
import { useWebhooksCRUD } from "./hooks/useWebhooksCRUD";

function App() {
  const webhooksCRUD = useWebhooksCRUD();

  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={4} minW="400px" maxW="500px">
        <Tabs.Root defaultValue="main" variant="line">
          <Tabs.List borderBottom="1px solid" borderColor="gray.200">
            <Tabs.Trigger 
              value="main"
              px={4}
              py={3}
              fontWeight="medium"
              _selected={{
                color: "blue.600",
                borderBottomColor: "blue.600",
                borderBottomWidth: "2px"
              }}
              _hover={{
                color: "blue.500"
              }}
            >
              Main
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="settings"
              px={4}
              py={3}
              fontWeight="medium"
              _selected={{
                color: "blue.600",
                borderBottomColor: "blue.600",
                borderBottomWidth: "2px"
              }}
              _hover={{
                color: "blue.500"
              }}
            >
              Settings
            </Tabs.Trigger>
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
