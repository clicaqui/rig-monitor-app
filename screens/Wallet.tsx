import { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { RigContext } from "../store/context/RigContext";
import CoinCard from "../components/CoinCard";
import TransactionCard from "../components/TransactionCard";
import { GlobalStyles } from "../constants/styles";

const renderItemHandler = (itemData:any) => {
    return <TransactionCard amount={itemData.item.amount} date={itemData.item.datetime} memo={itemData.item.memo} recipient={itemData.item.recipient}/>;
}

function Wallet(props:any) {
    const rigContext = useContext(RigContext);

    const DUCO_LOGO = require("../assets/duco.png");

    return (
        <View style={styles.container}>
            <CoinCard value={rigContext.balance.balance} logo={DUCO_LOGO} />
            <FlatList data={rigContext.transactions} renderItem={renderItemHandler} keyExtractor={(item, index) => index} />
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