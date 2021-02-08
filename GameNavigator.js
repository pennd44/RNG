import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector, useDispatch } from 'react-redux'
import Test from './Test'

const navigator = createBottomTabNavigator()


const GameNavigator = (props) => {
    return (

        <navigator.Navigator>
            <navigator.Screen name="Map" component={Test} />
        </navigator.Navigator>

        
    );
}

export default GameNavigator;