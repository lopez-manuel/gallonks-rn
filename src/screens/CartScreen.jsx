import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from '../components/CartItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CartScreen = () => {

    const [ cart, setCart ] = useState([]);

    useEffect(()=>{
        const getCart = async () => {
            const cartItems = await AsyncStorage.getItem('cart') || [];

            setCart( JSON.parse( cartItems ));
        }

        getCart();
        console.log(cart);
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.screenTitle}>CARRITO</Text>
            <ScrollView>
                <View>
                    { cart.map( item => <CartItem item={ item } key={ item.id } />)}
                </View>
            </ScrollView>
            <View style={styles.totalContainer}>
                <Text style={ styles.totalText}>Total: $360.00</Text>
            </View>
            <View style={ styles.buttonsContainer}>
                <View style={[ styles.buton, styles.warning]}>
                    <TouchableOpacity>
                        <Text style={ styles.buttonText}>Vaciar carrito</Text>
                    </TouchableOpacity>
                </View>

                <View style={[ styles.buton, styles.pay]}>
                    <TouchableOpacity>
                        <Text style={ styles.buttonText}>Continuar al pago</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
    productos: {
        color: 'black'
    },
    totalContainer: {
        backgroundColor: '#93c5fd',
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        marginVertical: 50
    },
    totalText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF'
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    buton: {
        width: '45%',
        padding: 10
    },
    warning: {
        backgroundColor: '#f43f5e'
    },
    pay: {
        backgroundColor: '#364167'
    },
    buttonText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})