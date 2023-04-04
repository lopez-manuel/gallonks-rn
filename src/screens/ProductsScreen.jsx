import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProductCard } from '../components/ProductCard';
import {categorias} from '../data';

export const ProductsScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity> */}
            <Text style={styles.screenTitle}>PRODUCTOS</Text>
            <ScrollView>
                <View style={styles.cardsContainer}>
                    {categorias.map( categoria => <ProductCard navigation={navigation} key={categoria.id} categoria={categoria} imagen={categoria.imagen} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: '#364167',
        color: '#FFF'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    boton: {
        
    },
    titulo: {
        fontSize: 40
    },
    cardsContainer: {
        paddingVertical: 30,
        flex: 1
    }
})