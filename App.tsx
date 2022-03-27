import { NavigationContainer } from '@react-navigation/native';
import type { Node } from 'react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';



const App: () => Node = () => {

  

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};



export default App;
