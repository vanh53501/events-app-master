import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home-screen";
import DetailScreen from "../screens/detail-screen";
import ProfileScreen from "../screens/profile-screen";
import QRScreen from "../screens/qr-screen";
import NewEventScreen from "../screens/new-event-screen";
import { useNavigation } from "@react-navigation/native";
import { navOptions } from "./options";
import LoginScreen from "../screens/login-screen";
import { HomeTabs } from "./tabs";

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Info" component={DetailScreen} />
      <Stack.Screen name="QR" component={QRScreen} />
      <Stack.Screen name="New" component={NewEventScreen} />
    </Stack.Navigator>
  );
};

export const DetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Logout" component={LoginStack} />
    </Stack.Navigator>
  );
};

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={HomeTabs} />
    </Stack.Navigator>
  );
};