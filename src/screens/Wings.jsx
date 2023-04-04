import React from 'react';
import {View, Text} from 'react-native';
import { Product } from '../components/Product';
import {alitas} from '../data/index';

export const Wings = () => {
    return (
        <View>
            {alitas.map( producto => <Product/> )}
        </View>
    )
}
