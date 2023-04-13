import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export const CartItem = ( { item } ) => {
    return (
        <View style={ styles.contenedor }>
            <Image style={ styles.imagen } source={ item.imagen } />
            <View>
                <Text style={ styles.texto}>{ item.titulo }</Text>
                <Text style={ styles.texto}> Salsa Mango habanero</Text>
            </View>
            <Text>${ item.precio }.00</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        marginVertical: 20,
        shadowColor: "#334155",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        backgroundColor: '#f1f5f9',
        alignItems: 'center'
    },
    imagen: {
        width: 80,
        height: 80
    },
    texto: {
        fontSize: 18,
        marginVertical: 4
    }
})