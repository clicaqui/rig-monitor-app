import axios from "axios";

export const getMiners = async () => {
    return await axios.get('https://clicaqui-red.mybluemix.net/rig')
    .then(response => { console.log(response.data); return response.data;})
    .catch(err => console.error(err));   
}