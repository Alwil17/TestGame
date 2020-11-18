import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
const App = () => {
    return (
        <NavigationContainer style={styles.container}>
            <DrawerNavigator />
        </NavigationContainer>
    );
};
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },
}
export default App;