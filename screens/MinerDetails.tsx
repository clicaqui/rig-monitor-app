import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useRoute } from "@react-navigation/native";


const MinerDetails = (props:any) => {
    const route = useRoute();
    const currentMiner = route.params?.miner;

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: currentMiner ? currentMiner.identifier : 'Work'
        })
    }, [])

    const closeModalHandler = () => {
        props.navigation.goBack();
    }

    return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.itemDetail}>{currentMiner.software}</Text>
                    <Text style={styles.itemDetail}>{currentMiner.sharetime}</Text>
                    <Text style={styles.itemDetail}>{currentMiner.accepted}</Text>
                    <Text style={styles.itemDetail}>{currentMiner.algorithm}</Text>
                    <Text style={styles.itemDetail}>{currentMiner.hashrate}</Text>
                    <Text style={styles.itemDetail}>{currentMiner.pool}</Text>
                </View>
                <Button title="Close" onPress={closeModalHandler} />
        </View>);
    }

export default MinerDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: GlobalStyles.colors.gray500
    },
    itemDetail: {
        color: 'white'
    }
});