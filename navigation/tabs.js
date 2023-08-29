import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DetailStack, HomeStack } from "./stack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Garden") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profiles") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={25} color="black" />
        },
      })}
    >
      <Tab.Screen name="Garden" component={HomeStack} />
      <Tab.Screen name="Profiles" component={DetailStack} />
    </Tab.Navigator>
  );
};
