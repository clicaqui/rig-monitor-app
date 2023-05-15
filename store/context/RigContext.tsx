import { createContext, useEffect, useState } from 'react';
import { getMiners } from '../../util/http';
import { fetchSettings } from '../../util/database';
import Settings from '../../models/settings';

export const RigContext = createContext({
    miners: [],
    balance: {},
    transactions: [],
    settings: {}
});

function RigContextProvider(props:any) {
    const [lstMiners, setLstMiners] = useState([]);
    const [vlrBalance, setVlrBalance] = useState({});
    const [lstTransactions, setLstTransactions] = useState([]);
    const [prices, setPrices] = useState([]);
    const [settings, setSettings] = useState({});
        
    useEffect(() => {
        reload();
        loadSettings();
    },[])

    function loadSettings (): void {
        fetchSettings().then((result) => {
            let configSettings = new Settings();
            configSettings.user =  result[0].user;
            configSettings.limit =  result[0].transactionLimit;
            setSettings(configSettings);
        });
    }

    const reload = async () => {
   
        const response = await getMiners(settings?.limit.toString());
        setLstMiners(response.result.miners);
        setVlrBalance(response.result.balance);
        setLstTransactions(response.result.transactions);
        setPrices(response.result.prices);
        setTimeout(() => {
            reload();
        },10000);
    };

    const value = {
        miners: lstMiners,
        balance: vlrBalance,
        transactions: lstTransactions,
        prices: prices,
        settings: settings 
    };
    return (
    <RigContext.Provider value={value}>
        {props.children}
    </RigContext.Provider>);
}

export default RigContextProvider
