import { FlatList, Text, View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import Miner from './Miner';
import { useContext, useState } from 'react';
import { RigContext } from '../store/context/RigContext';

function renderedItem(itemData:any) {
    //console.log("====item " + itemData.item.identifier);
    return <Miner data={itemData.item} />
}

const MinersList = (props:any) => {
    const rigCtx = useContext(RigContext);
    const [refreshing, setRefreshing] = useState(false);

    function onRefresh() {
        setRefreshing(true);
        rigCtx.reloadData();
        setRefreshing(false);
    }
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <FlatList  data={props.miners} renderItem={renderedItem} 
            keyExtractor={(item) => item.threadid} 
            onEndReached={props.onReload}/>
        </ScrollView>
    );
}

export default MinersList;

const styles = StyleSheet.create({

});