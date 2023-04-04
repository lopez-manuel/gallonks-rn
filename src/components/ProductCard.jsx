import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ProductCard = ({categoria, imagen, navigation}) => {

    return (
        <TouchableOpacity style={styles.contenedor} onPress={()=> navigation.navigate(`${categoria.nombre}`)}>
            <View>
                <Image style={styles.imagen} source={ imagen } />
                <Text style={styles.titulo}>
                    {categoria.nombre}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        width: 330,
        padding: 10,
        alignSelf: 'center',
        marginVertical: 10,
        shadowColor: "#334155",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    imagen: {
        width: 300,
        height: 200,
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 24,
        color: '#364167',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})