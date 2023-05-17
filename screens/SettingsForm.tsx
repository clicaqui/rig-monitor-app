import { View, StyleSheet, Button, Alert } from "react-native";
import InputText from "../components/UI/InputText";
import { useContext, useLayoutEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { RigContext } from "../store/context/RigContext";
import { updateSettings } from "../util/database";
import { useNavigation } from "@react-navigation/native";
import Settings from "../models/settings";

const SettingsForm = (props:any) => {
    const navigation = useNavigation();
    const rigCtx = useContext(RigContext);
    const [settings, setSettings] = useState({
        user: rigCtx.settings.user,
        limit: rigCtx.settings.limit.toString()
    });

    const onChangeTextHandler = (inputSettingsValues:any, enteredValue:string) => {
        setSettings((curInputValues) => {
            //console.log(curInputValues)
            return { ...curInputValues,
                [inputSettingsValues]: enteredValue
            }
        });
    }  

    async function saveSettings () {
        console.log('screenn ---'+settings.limit)
        const response = await updateSettings(settings.user,settings.limit)
            .then(() => {
                Alert.alert('This changes will be affect when you restart de app');

                rigCtx.settingsConf();
            }).finally(() => {
                navigation.goBack();

            });
        return response;    
    }
 
    return (<View style={styles.container}>
        <InputText label="Duino User" inputConfig={{
                    onChangeText:onChangeTextHandler.bind(this, 'user'),
                    value:settings.user,
                    keyboardType:"text"
                }}/>
        <InputText label="Show Transactions linit"  inputConfig={{ 
                    onChangeText:onChangeTextHandler.bind(this, 'limit'),
                    value:settings.limit,
                    keyboardType:"number-pad" 
                }} />
        <View>
            <Button title="Save" onPress={saveSettings} />
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