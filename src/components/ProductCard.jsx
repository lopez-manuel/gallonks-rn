import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const ProductCard = ({categoria, imagen}) => {
    return (
        <View style={styles.contenedor}>
            <Image style={styles.imagen} source={ imagen } />
            <Text>
                {categoria.nombre}
                {typeof(categoria.imagen)}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {

    },
    imagen: {
        width: 200,
        height: 200
    }
})