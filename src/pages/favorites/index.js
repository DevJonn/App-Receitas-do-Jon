import { useState, useEffect } from 'react' //useState busca o status, useEffect busca a lista.
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { getFavorites } from '../../utils/storage'

export function Favorites(){
    const [receipes, setReceipes] = useState([]);

    useEffect(()=> {

        async function getReceipes(){
            const result = await getFavorites('@appreceitas');
        }

        getReceipes();

    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

        {receipes.length == 0 && (
            <Text>Você ainda não tem nenhuma receita salva.</Text>
        )}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f3f9ff',
        paddingStart:14,
        paddingEnd: 14,
        paddingTop:36
    },
    title:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    }
})