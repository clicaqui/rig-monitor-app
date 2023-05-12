import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function IconButton(props:any) {
    return(
        <Pressable onPress={props.onPress} style={({pressed}) => pressed && styles.pressed }>
            <View style={styles.buttonContainer}>
                <Ionicons name={props.icon} color={props.color} size={props.size} />
            </View>
        </Pressable>
    );

}
export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 8,
        margin: 4
    },
    pressed: {
        opacity: 0.75
    }
});