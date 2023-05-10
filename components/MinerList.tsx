import { FlatList, Text, View, StyleSheet } from 'react-native';
import Miner from './Miner';
import { GlobalStyles } from '../constants/styles';
import { getMiners } from '../util/http';

function renderedItem(itemData:any) {
    console.log("====item " + itemData.item.identifier);
    return <Miner data={itemData.item} />
}

const fetchData = {}

const MinersList = (props:any) => {
    return (
        <View>
            <FlatList  data={props.miners} renderItem={renderedItem} keyExtractor={(item) => item.threadid} onEndReached={() => console.log()}/>
        </View>
    );
}

export default MinersList;

const styles = StyleSheet.create({

});