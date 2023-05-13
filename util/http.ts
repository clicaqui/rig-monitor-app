import axios from "axios";
import { useContext } from "react";

export const getMiners = async () => {
    
    return await axios.get('https://clicaqui-red.mybluemix.net/rig')
    .then(response => { return response.data;})
    .catch(err => console.error(err));   
}