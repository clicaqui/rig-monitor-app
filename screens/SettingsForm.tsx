import { TextInput, View, StyleSheet } from "react-native";
import InputText from "../components/UI/InputText";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { fetchSettings, insertSettings } from "../util/database";

const SettingsForm = () => {
    const [user, setUser] = useState('');
    const [limit, setLimit] = useState('');

    useEffect(() => {
        const response = fetchSettings().then((result) => {
            console.log(result);
            setUser(result[0].user);
            setLimit(result[0].transactionLimit.toString());
            
        } );

    },[]);


    const onChangeUserHandler = (text:string) => {
        setUser(text);
    }  
    const onChangeLimitHandler = (text:string) => {
        setLimit(text);
    }   
 
    return (<View style={styles.container}>
        <InputText label="Duino User" onChangeTextHandler={onChangeUserHandler} text={user}/>
        <InputText label="Show Transactions linit" onChangeTextHandler={onChangeLimitHandler} text={limit} />
    </View>);
}
export default SettingsForm;

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary500
    }
});