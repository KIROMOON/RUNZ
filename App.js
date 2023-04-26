

import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {UserContxtProvider} from './contexts/UserContext';
import SplashScreen from 'react-native-splash-screen';
 function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);
  
  return (
    <UserContxtProvider>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    </UserContxtProvider>
  );
  }

export default App;
