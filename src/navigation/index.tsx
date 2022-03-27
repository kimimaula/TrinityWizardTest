import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import EditPage from '../screens/edit';
import MainPage from '../screens/main';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const navigation = useNavigation();
    const NavigationBtn = ({props, text}) => {
        return(
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Text style={styles.btnStyle} {...props}>
                {text}
            </Text>
          </TouchableOpacity>
        )
      }

    return(
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
         name="Home" component={MainPage} />
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
            name="Edit" component={EditPage} />
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
      color: '#ff8c00'
    }
  });