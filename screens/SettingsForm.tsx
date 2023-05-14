import { View, StyleSheet, Button } from "react-native";
import InputText from "../components/UI/InputText";
import { useContext, useEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { RigContext } from "../store/context/RigContext";

const SettingsForm = () => {
    const rigCtx = useContext(RigContext);
    const [user, setUser] = useState(rigCtx.settings.user);
    const [limit, setLimit] = useState(rigCtx.settings.limit.toString());

    //  useEffect( () => {
    //      setUser(rigCtx.settings.user);
    //      setLimit(rigCtx.settings.limit.toString())
    //  },[user, limit]);

    const onChangeUserHandler = (text:string) => {
        setUser(text);
    }  
    const onChangeLimitHandler = (text:string) => {
        setLimit(text);
    }   

    const saveSettings = () => {
        
    }
 
    return (<View style={styles.container}>
        <InputText label="Duino User" onChangeTextHandler={onChangeUserHandler} text={user} type="text"/>
        <InputText label="Show Transactions linit" onChangeTextHandler={onChangeLimitHandler} text={limit} type="number-pad" />
        <View>
            <Button title="Save" onPress={() => saveSetttings()} />
        </View>
    </View>);
}
export default SettingsForm;

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary500
    }
});