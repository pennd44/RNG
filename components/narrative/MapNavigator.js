import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import Test from '../../Test';

const navigator = createStackNavigator()

const MapNavigator = (props) => {
    return (
        // <NavigationContainer>
        <navigator.Navigator>
            <navigator.Screen options={{ headerShown: false }} name="Map" component={Test} />
        </navigator.Navigator>
        // </NavigationContainer>

    );
}

export default MapNavigator;