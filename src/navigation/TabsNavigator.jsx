import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsScreen } from '../screens/ProductsScreen';
import { CartScreen } from '../screens/CartScreen';
import { PorfileScreen } from '../screens/PorfileScreen';
import Ionic from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const headerOptions = {
    headerShown: false,
}

export const TabsNavigator = () => {


    const tabBarIcons = (focused, size, color, route) => {
        let iconName;
        let colors = '#FFF';
        if(route.name === 'Productos'){
            iconName = 'fast-food-outline';
            colors = focused ? '#f3f' : '#FFF' 
        }
        else if( route.name === 'Carrito' ){
            iconName = 'cart-outline';
            colors = focused ? '#6366f1' : '#FFF'
        }
        else if( route.name === 'Perfil' ){
            iconName = 'person-circle-outline'
            colors = focused ? '#6366f1' : '#FFF'
        }
        return <Ionic name={iconName} size={35} color={colors} />
    }


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, size, color})=> tabBarIcons(focused,size,color, route),
                tabBarStyle: {
                    backgroundColor: '#364167',
                    height: 60
                },
                tabBarShowLabel: false
            })}
        >

            <Tab.Screen options={headerOptions} name="Productos" component={ProductsScreen} />
            <Tab.Screen  options={headerOptions} name="Carrito" component={CartScreen} />
            <Tab.Screen  options={headerOptions} name="Perfil" component={PorfileScreen} />

        </Tab.Navigator>
    );

}
