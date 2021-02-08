import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GameNavigator from './GameNavigator'
const navigator = createStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
            <navigator.Navigator>
                <navigator.Screen name='GN' component={GameNavigator} />
            </navigator.Navigator>
        </NavigationContainer>

    );
}

export default Main;