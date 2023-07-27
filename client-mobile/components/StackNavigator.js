import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import ProductPage from "../screens/ProductPage";
export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        options={{ headerShown: false }}
        component={ProductPage}
      />
      <Stack.Screen name="ProductDetail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
