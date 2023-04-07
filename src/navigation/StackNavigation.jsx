import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { Wings } from '../screens/Wings';

const Stack = createStackNavigator();

const headerOptions = {
    headerShown: false,
}

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={headerOptions} name="Home" component={MainScreen} />
            <Stack.Screen options={headerOptions} name="Products" component={Wings} />
            <Stack.Screen options={headerOptions} name="Alitas" component={Wings} />
        </Stack.Navigator>
    );
}