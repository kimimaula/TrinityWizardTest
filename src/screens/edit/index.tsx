import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditPage = ({ navigation, route }) => {
    const { item } = route.params;
    const [firstName, setFirstname] = useState(item?.firstName)
    const [lastName, setLastName] = useState(item?.lastName)
    const [email, setEmail] = useState(item?.email)
    const [phone, setPhone] = useState(item?.phone)

    const handleSave = async () => {
        const newData = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone
        }
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('stored-item')
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch(e) {
                console.log('----error', e)
            }
          }
          const fullArray = await getData()
          const index = fullArray.findIndex(object => {
            return object.id === item.id;
          });
          const updateArray = (item, index) => {
            fullArray[index] = item
            return fullArray
          }
          const updatedArray = updateArray(newData, index)
          const jsonValue = JSON.stringify(updatedArray)
          await AsyncStorage.setItem('stored-item', jsonValue)
          navigation.navigate('Home', { refresh : true })
    }

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
            <TouchableOpacity style={{ backgroundColor: '#ff8c00', margin: 20, height: 30, width: 100, justifyContent: 'center', alignItems: 'center' }} 
                onPress={() => { handleSave() }} >
                <Text>Save</Text>
            </TouchableOpacity>
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
        padding: 5
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