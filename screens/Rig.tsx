import { getMiners } from "../util/http";
import MinersList from "../components/MinerList";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MinerSumary from "../components/MinerSumary";


const Rig = (props:any) => {
    const [lstMiners, setLstMiners] = useState([]);
    const reload = () =>  {
        getMiners().then(response => {
            //console.log(response.result.miners);
            setLstMiners(response.result.miners);
        
        })
        .catch(err => console.log(err));
    }        
    
    useEffect(() => {
        reload();
       
    },[]);

    return (
        <View style={styles.container}>
            <MinerSumary miners={lstMiners}/>
            <MinersList miners={lstMiners} onReload={() => reload()} />
        </View>
    );
}

export default Rig;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        //backgroundColor: GlobalStyles.colors.primary700,
    }
});