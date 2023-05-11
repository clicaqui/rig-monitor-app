import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function TransactionCard(props:any) {
    return ( <View style={styles.minerItem}>
        <View>
            <Text style={styles.identity}>{props.memo}</Text>
            <Text style={styles.share}>{props.date}</Text>
        </View>
        <View style={styles.timeContainer}>
            <Text style={styles.time}>{props.amount}</Text>
        </View>
    </View>);
}

export default TransactionCard;

const styles = StyleSheet.create({
    minerItem: {
         padding: 12,
         marginVertical: 8,
         backgroundColor: GlobalStyles.colors.primary500,
         flexDirection: 'row',
         justifyContent: 'space-between',
         borderRadius: 6,
         elevation: 3,
         shadowColor: GlobalStyles.colors.gray500,
         shadowRadius: 4,
         shadowOffset: {width: 1, height:1},
         shadowOpacity: 0.4
    },
    identity: {
     color: GlobalStyles.colors.primary50
    },
    share: {
         fontSize: 16,
         marginBottom: 4,
         fontWeight: 'bold',
         color: GlobalStyles.colors.accent500
    },
    timeContainer: {
         paddingHorizontal: 12,
         paddingVertical: 4,
         backgroundColor: 'white',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 4,
         minWidth: 100
    },
    time: {
         color: GlobalStyles.colors.primary500,
         fontWeight: 'bold'
    }
 });