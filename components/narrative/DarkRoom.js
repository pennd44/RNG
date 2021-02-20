import React from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../actions';
import { useNavigation } from '@react-navigation/native';


const DarkRoom = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigation = useNavigation();
    function turnOnLight() {
        dispatch(setUser({ light: true }))
        // navigation.navigate('GN')
    }

    return (<SafeAreaView>
        <Image
            style={styles.test}
            source={require('../../assets/Images/Test.jpeg')}
        />
        <Button title='Turn on light' onPress={() => turnOnLight()} /></SafeAreaView>);
}

const styles = StyleSheet.create({

    test: {
        width: 400,
        height: 400,
    },
});
export default DarkRoom;