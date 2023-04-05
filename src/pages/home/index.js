import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Logo } from '../../components/logo'

export function Home(){
    const [inputValue, setInputValue] = useState ("")

    function handleSearch(){
        console.log("VOCÊ CLICOU NESSE BOTÃO")
    }


    return(
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Econtre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome da comida..."
                    style={styles.input}
                    value={inputValue}
                    onChangeText={ (text) => setInputValue(text) }
                />
                <TouchableOpacity onPress={handleSearch} >
                    <Ionicons name="search" size={28} color="#4CBE6C"/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,


    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e'
    },
    form:{
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRigth: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 54
    }
})