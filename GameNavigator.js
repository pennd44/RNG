import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector, useDispatch } from 'react-redux'
import Test from './Test'
import DarkRoom from './components/narrative/DarkRoom';
import { setUser } from './actions';
import MapNavigator from './components/narrative/MapNavigator';

const navigator = createBottomTabNavigator()


const GameNavigator = (props) => {
    // let dispatch = useDispatch()
    // let user = urseSelector(state => state.user)

    return (
        <navigator.Navigator>
            <navigator.Screen name="Map" component={MapNavigator} />
        </navigator.Navigator>

    );
}

export default GameNavigator;