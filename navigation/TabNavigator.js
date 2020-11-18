import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Icon} from 'react-native-elements';
import { MainStackNavigator, StatisticsStackNavigator  } from "./StackNavigator";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen icon={<Icon name='home' type='font-awesome'/>} name="Home" component={MainStackNavigator} />
            <Tab.Screen name="Statistics" component={StatisticsStackNavigator} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;