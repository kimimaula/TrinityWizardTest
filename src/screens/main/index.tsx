import React,{ useState, useEffect } from 'react';
import {
    ScrollView, Text, View, TouchableOpacity
} from 'react-native';
import DATA from '../../../src/assets/data.json'
import { StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage = ({ navigation }) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [selectedId, setSelectedId] = useState('')

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

    const setPageData = () => {
        storeData(DATA)
        const data = getData()
        console.log('------get Data')
        setData(data)
    }

    useEffect(() => {
        setPageData()
    }, [])

    const onRefresh = () => {
        setReload(true)
        setData()
    }

    const Avatar = () => {
        return(
            <View style={{ height: 45, width: 45, backgroundColor: '#ff8c00', borderRadius: 30, marginRight: 10 }} />
        )
    }

    const Item = ({ item, onPress }) => (
        <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
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
            onPress={() => setSelectedId(item.id)}
          />
        );
      };

    return(
        <View style={styles.mainContainer} >
             <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
            <Text>test</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
  });

export default MainPage