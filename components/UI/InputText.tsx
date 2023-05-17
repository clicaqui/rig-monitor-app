import { StyleSheet } from "react-native";
import { TextInput, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function InputText (props:any) {
  
    return(
        <View style={styles.field}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.text} {...props.inputConfig} />
        </View>
    );
}

export default InputText;

const styles = StyleSheet.create({
    field: {
        //flexDirection: 'row',
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'white'
    },
    text: {
        textAlign: 'center',
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderBottomColor: GlobalStyles.colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 8

    }
});
