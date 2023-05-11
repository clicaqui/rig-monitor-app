import { Text, View, Image, StyleSheet} from "react-native";
import { GlobalStyles } from "../constants/styles";

function CoinCard(props:any) {
    return (<View style={styles.container}>
        <Image source={props.logo} style={styles.logo} />
    <Text style={styles.value}>{props.value}</Text>
</View>)
};

export default CoinCard;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    },
    logo: {
        width: 24,
        height: 24
    } 
});