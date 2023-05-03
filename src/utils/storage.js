import AsyncStorage from '@react-native-async-storage/async-storage'

//Com isto nós podemos: Buscar Favoritos, salvar novo favoritos e remover favoritos.

export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key) 
    return JSON.parse(favorites) || []; 
    
    //feito para retornar uma lista de favoritos
}


export async function saveFavorite(){

}

export async function removeItem(){

}

export async function isFavorite(){

}