import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GameNavigator from './GameNavigator'
import { useSelector, useDispatch } from 'react-redux'
import DarkRoom from './components/narrative/DarkRoom';

const navigator = createStackNavigator()

const Main = () => {
    let user = useSelector(state => state.user)
    return (
        <NavigationContainer>
            <navigator.Navigator>
                {user.light == false ?
                    <navigator.Screen options={{ headerShown: false }} name='Dark Room' component={DarkRoom} /> :
                    <navigator.Screen options={{ headerShown: false }} name='Game Navigator' component={GameNavigator} />
                }
            </navigator.Navigator>
        </NavigationContainer>

    );
}

export default Main;