import axios from "axios";
export const getMiners = async (limit:string) => {
    
    return await axios.get(`https://clicaqui-red.mybluemix.net/rig?limit=${limit}`)
    .then(response => { return response.data;})
    .catch(err => console.error(err));   
}