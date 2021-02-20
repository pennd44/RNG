import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './actions';



const Test = (props) => {
    let dispatch = useDispatch()

    return (

        <SafeAreaView>
            <Button title='reset' onPress={() => dispatch(setUser({ light: false }))} />
        </SafeAreaView>
    );
}

export default Test;