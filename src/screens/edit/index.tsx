import React from 'react';
import {
    ScrollView, Text, View, TouchableOpacity
} from 'react-native';
import { StyleSheet } from 'react-native';

const EditPage = ({ navigation, route }) => {
    const { id } = route.params;
    console.log('-----id', id)
    return(
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.mainContainer} >
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} >
                <Text>Test</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
  });

export default EditPage