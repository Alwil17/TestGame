import React from "react";
import { View, Text, StyleSheet, RefreshControl, ScrollView } from "react-native";
import {Card, Icon, Button} from "react-native-elements";
import Game from "./Game";
import {score1, score2} from "./Game";
import {render} from "react-native-web";
const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
const Home = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <View style={{flex:1, flexDirection: "column"}} onStartShouldSetResponder={onRefresh}>
            <View style={{marginBottom: 10}}>
                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <Card containerStyle={styles.top}>
                        <Card.Title>
                            <Icon name='user' type='font-awesome'/>
                        </Card.Title>
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Joueur 1</Text>
                        <Text>Score: {score1}</Text>
                    </Card>
                    <Card containerStyle={styles.top}>
                        <Card.Title>
                            <Icon name='user' type='font-awesome'/>
                        </Card.Title>
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Joueur 2</Text>
                        <Text>Score: {score2}</Text>
                    </Card>
                </View>



            </View>
            <View style={styles.bottom}>
                <Text style={{fontWeight: "bold", fontSize: 30}}>Mon premier Projet</Text>
                <Button title='New Game' onPress={() => navigation.navigate("Game")}/>
            </View>
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
    top: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 150,
        height: 175,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    bottom: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "space-around"
    }
});
export default Home;