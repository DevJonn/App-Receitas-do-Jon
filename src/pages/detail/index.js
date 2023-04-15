import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import {  useRoute, useNavigation } from '@react-navigation/native'
import { Entypo, AntDesign } from '@expo/vector-icons'


export function Detail(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={ () => console.log('TESTANDOOOO') }>
                    <Entypo
                        name='heart'
                        size={28}
                        color="#FF4141"
                />
                </Pressable>
            )
        })


    }, [navigation, route.params?.data])

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable>
                <View style={styles.playIcon}>
                    <AntDesign name="playcircleo" size={50} color="#FAFAFA"  />
                </View>
                <Image
                    source={{ uri: route.params?.data.cover}}
                    style={styles.cover}
                />
            </Pressable>

            <View style={styles.headerDetails}>
                <View>
                    <Text>{route.params?.data.name}</Text>
                    <Text>ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F3f9ff',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14
    },
    cover:{
        height: 200,
        borderRadius: 14,
        width: '100%',
    },
    playIcon:{
        position: 'absolute',
        zIndex: 9,
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
