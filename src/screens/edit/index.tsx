import React, { useState } from 'react';
import {
    ScrollView, Text, View, TouchableOpacity, TextInput
} from 'react-native';
import { StyleSheet } from 'react-native';

const EditPage = ({ navigation, route }) => {
    const { item } = route.params;
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    console.log('-----id', item)
    return(
        <View style={styles.mainContainer} >
            <View style={{ backgroundColor: '#ff8c00', height: 100, width: 100, borderRadius: 50, marginTop: 20, marginBottom: 20 }} />
            <View style={{ alignSelf: 'flex-start', padding: 5, backgroundColor: 'lightgrey', flexDirection: 'row', height: 30, width: '100%' }} >
                <Text>Main Information</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5 }} >
                <View style={styles.inputTextContainer} >
                    <Text>First Name</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={setFirstname}
                    value={firstName}
                />
            </View>
            <View style={{ flexDirection: 'row', margin: 10, paddingBottom: 5 }} >
                <View style={styles.inputTextContainer} >
                    <Text>Last Name</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={setLastName}
                    value={lastName}
                />
            </View>
            <View style={{ alignSelf: 'flex-start', padding: 5, backgroundColor: 'lightgrey', flexDirection: 'row', height: 30, width: '100%' }} >
                <Text>Sub Information</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5 }} >
                <View style={styles.inputTextContainer} >
                    <Text>Email</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style={{ flexDirection: 'row', margin: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5 }} >
                <View style={styles.inputTextContainer} >
                    <Text>Phone</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType="numeric"
                />
            </View>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('Home') }} >
                <Text>Test</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center', 
    },
    input: {
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        flex: 1,
        marginLeft: 15,
    },
    inputTextContainer: {
        height: 30,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default EditPage