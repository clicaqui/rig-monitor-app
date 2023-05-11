import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function TransactionCard(props:any) {
    return ( <View style={styles.minerItem}>
        <View>
            <Text style={styles.memo}>{props.memo}</Text>
            <Text style={styles.date}>{props.date}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>{(props.amount).toFixed(4)}</Text>
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
    date: {
     color: GlobalStyles.colors.primary50
    },
    memo: {
         color: GlobalStyles.colors.accent500
    },
    amountContainer: {
         paddingHorizontal: 10,
         paddingVertical: 4,
         backgroundColor: 'white',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 4,
         minWidth: 80
    },
    amount: {
         color: GlobalStyles.colors.primary500,
         fontWeight: 'bold'
    }
 });