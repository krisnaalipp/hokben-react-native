import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarStyle: {
            padding: 5,
          },
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Product") {
              iconName = focused ? "fast-food-sharp" : "fast-food-outline";
            }
            return <Ionicons name={iconName} size={30} color={"#dc3545"} />;
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Product" component={StackNavigator} />
    </Tab.Navigator>
  );
}
