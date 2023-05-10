import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Rig from './screens/Rig';
import Manager from './screens/Manager';
import Prices from './screens/Prices';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function DetailOverview() {
  return (<BottomTabs.Navigator screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500
  }}>
     <BottomTabs.Screen name='Miners' component={Rig} options={{
      title: 'Rig',
      tabBarLabel: 'Rig',
      tabBarIcon: ({color, size}) => (<Ionicons name="hammer" size={size} color={color} />)
     }}/>
     <BottomTabs.Screen name='Prices' component={Prices} options={{
       title: 'Mercado',
       tabBarLabel: 'Prices',
       tabBarIcon: ({color, size}) => (<Ionicons name="wallet" size={size} color={color} />)
      }}/>
  </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Details' component={DetailOverview} options={{  headerShown: false }}/>
          <Stack.Screen name='Manager' component={Manager} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}