import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';

const Miner = (props:any) => {
    const navigation = useNavigation();
    const minerPressHandler = () => {
        console.log(props.data?.identifier);
        navigation.navigate('MinerDetails', {
                miner: props.data,
        });
    }
    return (
        <Pressable
            onPress={minerPressHandler}>
            <View style={styles.minerItem}>
                    
                <View>
                    <Text style={styles.identity}>{props.data.identifier}</Text>
                    <Text style={styles.share}>{props.data.accepted}</Text>
                </View>
                <LinearGradient style={styles.timeContainer} start={[0.0,1.0]} end={[1.0, 0.0]} colors={['#19db30' , '#a8d408ee', '#f5dd07', '#f39c04', '#f60000']} >
                    <View>
                        <Text style={{color: GlobalStyles.colors.primary500,fontWeight: 'bold',marginLeft: (props.data.hashrate / 1000) < 100 ? (props.data.hashrate / 1000) : 96}}>{(props.data.hashrate / 1000).toFixed(2)}</Text>
                    </View>
                </LinearGradient>
            </View>
        </Pressable>
    );
}

export default Miner;

const styles = StyleSheet.create({
   minerItem: {
        flex: 2,
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
        //backgroundColor: 'white',
        justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 4,
        minWidth: 180,
        maxWidth: 180
   },
   time: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
   }
});