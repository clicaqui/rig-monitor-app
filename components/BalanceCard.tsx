import { Text, View , StyleSheet} from "react-native";
import { GlobalStyles } from "../constants/styles";

function BalanceCard(props:any) {
    return (<View style={styles.container}>
    <Text style={styles.text}></Text>
    <Text style={styles.counter}>{props.value}</Text>
</View>)
};

export default BalanceCard;

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