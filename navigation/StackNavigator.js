import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Game from "../screens/Game";
import Daily from "../screens/Daily";
import Statistics from "../screens/Statistics";
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    );
};
const DailyStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Daily challenge" component={Daily} />
        </Stack.Navigator>
    );
};
const StatisticsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Statistics" component={Statistics}/>
        </Stack.Navigator>
    );
};
export { MainStackNavigator, StatisticsStackNavigator};