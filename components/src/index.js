import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Days from './BodyApp';


export default function AppIndex (){
    return ( 
        <View style = {styles.container}>
            <Header name="Cecilia Gomes" />
            <Days/>
        </View>
    );

}
const styles = StyleSheet.create({
    container : {
        backgroundColor: "#f3f4e5",
        height: '100%',
    },
    content : {
        fontSize : 20,
        color: '#fff',

    }

})