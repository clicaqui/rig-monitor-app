import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { RigContext } from "../store/context/RigContext";
import CoinCard from "../components/CoinCard";
import { GlobalStyles } from "../constants/styles";
import TransactionList from "../components/TransactionList";



function Wallet(props:any) {
    const rigContext = useContext(RigContext);

    const DUCO_LOGO = require("../assets/duco.png");
    
    return (
        <View style={styles.container}>
            <CoinCard value={rigContext.balance.balance} logo={DUCO_LOGO} />
            <TransactionList transactions={rigContext.transactions} />
        </View>
        );
}

export default Wallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    }
});