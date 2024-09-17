// import Login from "./src/screens/Login";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import HomePage from "./src/screens/HomePage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn}  options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Homepage" component={HomePage}  options={{
            headerShown: false,
          }} />
        <Stack.Screen name="SignUp" component={SignUp}  options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
