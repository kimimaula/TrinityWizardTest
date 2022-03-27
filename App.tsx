import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Node } from 'react';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  const NavigationBtn = ({props, text}) => {
    return(
      <TouchableOpacity onPress={() => {}} >
        <Text style={styles.btnStyle} {...props}>
            {text}
        </Text>
      </TouchableOpacity>
    )
  }


  const Test = () => {
    return(
      <Text>Test</Text>
    )
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen
            options={{
              title: 'Contacts',
              headerLeft: (props) => (
                <TouchableOpacity
                  {...props}
                  onPress={() => {
                    // Do something
                  }}
                ><Text>search</Text></TouchableOpacity>
              ),
              headerRight: (props) => (
                <TouchableOpacity
                  {...props}
                  onPress={() => {
                    // Do something
                  }}
                ><Text>add</Text></TouchableOpacity>
              ),
            }}
           name="Home" component={Test} />
          <Stack.Screen
            options={{
              title: '',
              headerLeft: (props) => (
                <NavigationBtn props={props} text='Cancel'/>
              ),
              headerRight: (props) => (
                <NavigationBtn props={props} text='Save'/>
              ),
              }}
              name="Edit" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    color: '#ff8c00'
  }
});

export default App;
