import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const colorModeText = colorMode === "dark" ? "Dark Mode" : "Light Mode";
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorModeText}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
