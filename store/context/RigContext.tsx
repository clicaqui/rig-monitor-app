import { createContext, useEffect, useState } from 'react';
import { getMiners } from '../../util/http';
import { fetchSettings } from '../../util/database';

export const RigContext = createContext({
    miners: [],
    balance: {},
    transactions: [],
    settings: {},
    settingsConf: () => {},
    reloadData: () => {}
});

function RigContextProvider(props:any) {
    const [lstMiners, setLstMiners] = useState([]);
    const [vlrBalance, setVlrBalance] = useState({});
    const [lstTransactions, setLstTransactions] = useState([]);
    const [prices, setPrices] = useState([]);
    const [settings, setSettings] = useState({});
        
    useEffect(() => {
        loadSettings();
    },[])

    useEffect(() => {
        if (settings.limit !== undefined){
            console.log('reload--'+settings.limit);
            reload();
        }

    },[settings]);

    function loadSettings (): void {
        const response = fetchSettings().then(async (result) => {
            console.log('loading...');
              await setSettings({...settings, 'user': result[0].user, 
                        'limit': result[0].transactionLimit});
         
                    });
          
    }

    const reload = async () => {
        const limit = settings.limit;
        console.log('==>'+limit);
        const response = await getMiners(limit);
        setLstMiners(response.result.miners);
        setVlrBalance(response.result.balance);
        setLstTransactions(response.result.transactions);
        setPrices(response.result.prices);
        return response;    
    };

    const value = {
        miners: lstMiners,
        balance: vlrBalance,
        transactions: lstTransactions,
        prices: prices,
        settings: settings,
        settingsConf: loadSettings,
        reloadData: reload

    };
    return (
    <RigContext.Provider value={value}>
        {props.children}
    </RigContext.Provider>);
}

export default RigContextProvider
