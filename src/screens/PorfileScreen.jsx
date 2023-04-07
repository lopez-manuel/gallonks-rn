import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

export const PorfileScreen = () => {
    return(
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.screenTitle}>PERFIL</Text>
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