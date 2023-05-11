import { createContext, useEffect, useState } from 'react';
import { getMiners } from '../../util/http';

export const RigContext = createContext({
    miners: [],
    balance: {},
    transactions: []
});

function RigContextProvider(props:any) {
    const [lstMiners, setLstMiners] = useState([]);
    const [vlrBalance, setVlrBalance] = useState({});
    const [lstTransactions, setLstTransactions] = useState([]);
    const [prices, setPrices] = useState([]);
    
    useEffect(() => {
        reload();
    },[]);

    const reload = async () => {
        const response = await getMiners();
        setLstMiners(response.result.miners);
        setVlrBalance(response.result.balance);
        setLstTransactions(response.result.transactions);
        setPrices(response.result.prices);
        setTimeout(() => {
            reload();
        },5000);
    };

    const value = {
        miners: lstMiners,
        balance: vlrBalance,
        transactions: lstTransactions,
        prices: prices
    };
    return (
    <RigContext.Provider value={value}>
        {props.children}
    </RigContext.Provider>);
}

export default RigContextProvider
