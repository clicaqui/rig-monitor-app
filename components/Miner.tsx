import { Pressable, Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const Miner = (props:any) => {
    return (
        <Pressable>
            <View style={styles.minerItem}>
                <Text style={styles.identity}>{props.data.identifier}</Text>
                <Text style={styles.share}>{props.data.hashrate}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{props.data.sharetime}</Text>
            </View>
        </Pressable>
    );
}

export default Miner;

const styles = StyleSheet.create({
   minerItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.4
   },
   identity: {
    color: GlobalStyles.colors.primary50
   },
   share: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
        color: GlobalStyles.colors.accent500
   },
   timeContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,

   },
   time: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
   }
});