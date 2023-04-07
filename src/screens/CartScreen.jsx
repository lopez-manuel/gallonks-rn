import React from 'react'
import { View, Text,StyleSheet,SafeAreaView,ScrollView } from 'react-native';

export const CartScreen = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.screenTitle}>CARRITO</Text>
            <ScrollView>
                <View>

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
})