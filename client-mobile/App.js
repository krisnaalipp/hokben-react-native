import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/TabNavigator";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/appolo-connection";
import { useFonts } from "expo-font";
import theme from "./config/nativebase-config";
export default function App() {
  const [loaded] = useFonts({
    "GothamRounded-Medium": require("./assets/fonts/GothamRoundedMedium_21022.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
