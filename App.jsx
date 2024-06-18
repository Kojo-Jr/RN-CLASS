import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/Home/Main/MainScreen";
const homeStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* children  */}
      <homeStack.Navigator>
        <homeStack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </homeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
