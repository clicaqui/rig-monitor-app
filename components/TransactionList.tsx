import { FlatList, View } from "react-native";
import TransactionCard from "./TransactionCard";


const renderItemHandler = (itemData:any) => {
    return <TransactionCard amount={itemData.item.amount} date={itemData.item.datetime} memo={itemData.item.memo} recipient={itemData.item.recipient}/>;
}

const TransactionList = (props:any) => {
    return(<View>
            <FlatList data={props.transactions} renderItem={renderItemHandler} keyExtractor={(item, index) => index} />
    </View>);
}

export default TransactionList;
