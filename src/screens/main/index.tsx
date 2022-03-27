import React,{ useState, useEffect } from 'react';
import {
    ScrollView, Text, View, TouchableOpacity
} from 'react-native';
import DATA from '../../../src/assets/data.json'
import { StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MainPage = ({ navigation, route }) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('stored-item', jsonValue)
        } catch (e) {
          console.log('----error', e)
        }
      }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('stored-item')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log('----error', e)
        }
      }

    const setInitialData = async () => {
        const data = await getData()
        if (!data) {
            return
        }
        storeData(DATA)
        const newData = await getData()
        setData(newData)
    }

    const setUpdatedData = async () => {
        const data = await getData()
        setData(data)
    }

    useEffect(() => {
        setInitialData()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            setUpdatedData()
        }, [])
      );

    const onRefresh = async () => {
        setReload(true)
        storeData(DATA)
        const newData = await getData()
        setData(newData)
        setReload(false)
    }

    const Avatar = () => {
        return(
            <View style={{ height: 45, width: 45, backgroundColor: '#ff8c00', borderRadius: 30, marginRight: 10 }} />
        )
    }

    const Item = ({ item }) => (
        <TouchableOpacity style={{ padding: 10 }} onPress={() => { navigation.navigate('Edit', { item }) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 5 }} >
                <Avatar />
                <Text >{item.firstName} {item.lastName}</Text>
            </View>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
          />
        );
      };

    return(
        <View style={styles.mainContainer} >
             <FlatList
                onRefresh={() => onRefresh()}
                data={data}
                refreshing={reload}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
  });

export default MainPage