import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import {categorias} from '../data';

export const ProductsScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
            <View>
                {categorias.map( categoria => <ProductCard key={categoria.id} categoria={categoria} imagen={categoria.imagen} />)}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#364167',
    },
    boton: {
        
    },
    titulo: {
        fontSize: 40
    }
})