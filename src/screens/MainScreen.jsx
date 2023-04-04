import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const MainScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Image style={styles.logo} source={require('../assets/gallonks-logo.png')}/>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    placeholderTextColor={'white'}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Contrasena'
                    secureTextEntry
                    placeholderTextColor={'white'}
                />

                    <TouchableOpacity style={styles.boton}>
                        <Text style={styles.botonLabel}>
                            Iniciar sesion
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.boton}>
                            <Text style={styles.botonLabel}>
                                Registrarse
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boton} onPress={()=> navigation.navigate('Products')}>
                            <Text style={styles.botonLabel}>
                                Continuar como invitado
                            </Text>
                        </TouchableOpacity>
                    </View>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#364167', 
    },
    logo: {
        width: 350,
        height: 150,
        alignSelf: 'center',
        marginTop: 100
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 10,
        width: 300,
        alignSelf: 'center',
        marginTop: 30,
    },
    boton: {
        width: 300,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#364190',
        padding: 10,
        alignSelf: 'center',
    },
    botonLabel: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700'
    },
    buttonContainer: {
        marginVertical: 30
    }
})