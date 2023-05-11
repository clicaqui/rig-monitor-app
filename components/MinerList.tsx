import { FlatList, Text, View, StyleSheet } from 'react-native';
import Miner from './Miner';

function renderedItem(itemData:any) {
    //console.log("====item " + itemData.item.identifier);
    return <Miner data={itemData.item} />
}

const MinersList = (props:any) => {
    return (
        <View>
            <FlatList  data={props.miners} renderItem={renderedItem} 
            keyExtractor={(item) => item.threadid} 
            onEndReached={props.onReload}/>
        </View>
    );
}

export default MinersList;

const styles = StyleSheet.create({

});