import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/Home";
import VideoCall from "../screens/VideoCall";
function AppNavigation(): JSX.Element {
    const AppStack = createNativeStackNavigator()
    return (
        <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home" >
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="Video" component={VideoCall} />
        </AppStack.Navigator>
        </NavigationContainer>
        )
    }
export default AppNavigation