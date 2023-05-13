import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AppLoading, { AppLoadingProps } from 'expo-app-loading';

import Rig from './screens/Rig';
import MinerDetails from './screens/MinerDetails';
import Prices from './screens/Prices';
import { GlobalStyles } from './constants/styles';
import RigContextProvider from './store/context/RigContext';
import Wallet from './screens/Wallet';
import IconButton from './components/UI/IconButton';
import { useEffect, useState } from 'react';
import { init } from './util/database';
import SettingsScreen from './screens/SettingsForm';
import SettingsForm from './screens/SettingsForm';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MinerOverview() {
  return (<BottomTabs.Navigator screenOptions={({ navigation }) => ({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
     headerRight:  ({tintColor}) => <IconButton icon="settings" size={24} color={tintColor} 
     onPress={() => {
      navigation.navigate('Settings');
     }} />
  })}>
     <BottomTabs.Screen name='Miners' component={Rig} options={{
      title: 'Rig Monitor',
      tabBarLabel: 'Rig',
      tabBarIcon: ({color, size}) => (<Ionicons name="ios-hammer" size={size} color={color} />)
     }}/>
     <BottomTabs.Screen name='Wallet Sumary' component={Wallet} options={{
       title: 'Wallet',
       tabBarLabel: 'Wallet',
       tabBarIcon: ({color, size}) => (<Ionicons name="wallet" size={size} color={color} />)
      }}/>
       <BottomTabs.Screen name='Prices' component={Prices} options={{
       title: 'Market',
       tabBarLabel: 'Prices',
       tabBarIcon: ({color, size}) => (<Ionicons name="ios-analytics" size={size} color={color} />)
      }}/>
  </BottomTabs.Navigator>
  );
}

export default function App() {
  const [dbInitializer, setDbInitializer] = useState(false);
  useEffect(() => {
    init().then(() => {
      setDbInitializer(true);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

  if (!dbInitializer) {
    return <AppLoading />
  } 
  return (
    <>
      <StatusBar style="light" />
      <RigContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white'
          }}>
            <Stack.Screen name="Home" component={MinerOverview} options={{  headerShown: false }}/>
            <Stack.Screen name="MinerDetails" component={MinerDetails} options={{
              presentation: 'modal'
            }}  />
            <Stack.Screen name="Settings" component={SettingsForm} options={{  
            presentation: 'modal' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </RigContextProvider>
    </>
  );
}