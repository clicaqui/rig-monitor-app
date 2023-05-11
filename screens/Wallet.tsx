import { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { RigContext } from "../store/context/MinerContext";
import BalanceCard from "../components/BalanceCard";
import TransactionCard from "../components/TransactionCard";

const renderItemHandler = (itemData:any) => {
    return <TransactionCard amount={itemData.item.amount} date={itemData.item.datetime} memo={itemData.item.memo}/>;
}

function Wallet(props:any) {
    const rigContext = useContext(RigContext);

    return (
        <View style={styles.container}>
            <BalanceCard value={rigContext.balance.balance} />
            <FlatList data={rigContext.transactions} renderItem={renderItemHandler} keyExtractor={(item, index) => index} />
        </View>
        );
}

export default Wallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        //backgroundColor: GlobalStyles.colors.primary700,
    }
});