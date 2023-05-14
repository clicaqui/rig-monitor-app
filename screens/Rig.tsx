import MinersList from "../components/MinerList";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MinerSumary from "../components/MinerSumary";
import { RigContext } from "../store/context/RigContext";
import { GlobalStyles } from "../constants/styles";


const Rig = (props:any) => {
    const minersCtx = useContext(RigContext);

    return (
        <View style={styles.container}>
            <MinerSumary miners={minersCtx.miners}/>
            <MinersList miners={minersCtx.miners} />
        </View>
    );
}

export default Rig;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    }
});