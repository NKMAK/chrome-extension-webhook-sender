import { useState } from "react";
import { ChakraProvider, Box, Stack, Button, HStack, defaultSystem } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"main" | "settings">("main");

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
            <MainPage />
          ) : (
            <SettingsPage />
          )}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
