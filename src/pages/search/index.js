import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import api from '../../services/api'


export function Search(){
    const route = useRoute();

    useEffect(() => {
        async function  fetchReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            
        }

        fetchReceipes();

    }, [route.params?.name])


    return(
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    }
})