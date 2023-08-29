import { NavigationContainer } from "@react-navigation/native";
import { HomeTabs } from "./navigation/tabs";
import { StatusBar } from "expo-status-bar";
import { LoginStack } from "./navigation/stack";

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
