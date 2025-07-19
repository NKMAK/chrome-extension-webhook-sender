import React from "react";
import { ChakraProvider, Box, defaultSystem, Tabs } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={4} minW="400px" maxW="500px">
        <Tabs.Root defaultValue="main" variant="enclosed">
          <Tabs.List>
            <Tabs.Trigger value="main">Main</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="main" pt={4}>
            <MainPage />
          </Tabs.Content>

          <Tabs.Content value="settings" pt={4}>
            <SettingsPage />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </ChakraProvider>
  );
}

export default App;
