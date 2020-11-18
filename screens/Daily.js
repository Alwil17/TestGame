import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {Image} from "react-native-elements";
const Daily = () => {
    return (
        <View style={{flex:1, flexDirection: "column"}}>
            <View>
                <Card style={{flex: 4, flexDirection: "column"}}>

                </Card>
            </View>
            <View></View>
        </View>
    );
};
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
export default Daily;