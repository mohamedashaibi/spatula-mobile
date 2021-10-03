import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import store from './Redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './Components/ComponentsReal/First';
import EnterScreen2 from './Components/ComponentsReal/EnterScreen2';
import Loadingscreen3 from './Components/ComponentsReal/LoadingScreen3';
import LetsExplore from './Components/ComponentsReal/LetsExplore4';
import SigninSignup5 from './Components/ComponentsReal/SigninSignup5';
import Signin6 from './Components/ComponentsReal/Signin6';
import Signup7 from './Components/ComponentsReal/Signup7';
import CustomNavigation from './Components/Drawer/CustomNavigation';
import { withNavigation } from 'react-navigation';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {


  const state = useSelector(state => state.auth)

  return (    
    <Provider store={store}>
      <NavigationContainer >    
      <Stack.Navigator initialRouteName={state.auth.token==""?"First":"Nav"} screenOptions={{ orientation: 'portrait' }}>        
        <Stack.Screen name="Nav" component={CustomNavigation} options={{ headerShown: false, orientation: 'portrait' }}/>        
        <Stack.Screen name="First" component={First} options={{ headerShown: false}}/>        
        <Stack.Screen name="Second" component={EnterScreen2} options={{ headerShown: false}}/>        
        <Stack.Screen name="Third" component={Loadingscreen3} options={{ headerShown: false}}/>        
        <Stack.Screen name="Fourth" component={LetsExplore} options={{ headerShown: false}}/>        
        <Stack.Screen name="SigninUp" component={SigninSignup5} options={{ headerShown: false}}/>        
        <Stack.Screen name="Signin" component={withNavigation(Signin6)} options={{ headerShown: false}}/>        
        <Stack.Screen name="Signup" component={withNavigation(Signup7)} options={{ headerShown: false}}/>        
      </Stack.Navigator>
      </NavigationContainer>
     
    </Provider>
  );
};


export default App;