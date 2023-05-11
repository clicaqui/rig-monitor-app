import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import sum from "../util/sum";


const MinersList = (props:any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Miners: {props.miners.length}</Text>
            <Text style={styles.counter}>{sum(props.miners)}</Text>
        </View>
    );
}

export default MinersList;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: GlobalStyles.colors.primary300
    },
    counter: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    } 
});