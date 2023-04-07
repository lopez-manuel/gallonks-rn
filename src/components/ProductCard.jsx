import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//onPress={()=> navigation.navigate(`${categoria.nombre}`)}

export const ProductCard = ({categoria, imagen, navigation}) => {

    return (
        <TouchableOpacity style={styles.contenedor} >
            <View>
                <Image style={styles.imagen} source={ imagen } />
                <Text style={styles.titulo}>
                    {categoria.titulo}
                </Text>
                <Text style={styles.precio}>${categoria.precio}.00</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.botonText}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        width: 170,
        padding: 0,
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
        backgroundColor: '#f1f5f9',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: "hidden"
    },
    imagen: {
        width: 170,
        height: 150,
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 24,
        color: '#364167',
        fontWeight: 'bold',
        textAlign: 'center',
        height: 80
    },
    precio: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    boton: {
        backgroundColor: '#364167',
        padding: 10,
        marginVertical: 20,
        width: 120,
        alignSelf: 'center',
        borderRadius: 10
    },
    botonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})