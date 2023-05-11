import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { RigContext } from "../store/context/RigContext";
import CoinCard from "../components/CoinCard";

function Prices() {
    const pricesCtx = useContext(RigContext);

    const BCH_LOGO = require("../assets/bch.png");
    const FLUFFY_LOGO = require("../assets/fluffyswap.png");
    const PANCAKE_LOGO = require("../assets/pancake.png");
    const SUN_LOGO = require("../assets/sunswap.png");
    const SUSHI_LOGO = require("../assets/sushi.png");
    const UBES_LOGO = require("../assets/ubeswap.png");
    const XMG_LOGO = require("../assets/xmg.png");
    const TRON_LOGO = require("../assets/trx.png");
    const NANO_LOGO = require("../assets/xno.png");



    return (
        <View style={styles.container}>
            <CoinCard value={pricesCtx.prices.bch} logo={BCH_LOGO} />
            <CoinCard value={pricesCtx.prices.fluffy} logo={FLUFFY_LOGO} />
            <CoinCard value={pricesCtx.prices.pancake} logo={PANCAKE_LOGO} />
            <CoinCard value={pricesCtx.prices.sunswap} logo={SUN_LOGO} />
            <CoinCard value={pricesCtx.prices.sushi} logo={SUSHI_LOGO} />
            <CoinCard value={pricesCtx.prices.ubeswap} logo={UBES_LOGO} />
            <CoinCard value={pricesCtx.prices.xmg} logo={XMG_LOGO} />
            <CoinCard value={pricesCtx.prices.trx} logo={TRON_LOGO} />
            <CoinCard value={pricesCtx.prices.nano} logo={NANO_LOGO} />
        </View>
    );
}

export default Prices;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        //backgroundColor: GlobalStyles.colors.primary700,
    }
});