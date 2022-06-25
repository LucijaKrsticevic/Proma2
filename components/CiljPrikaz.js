import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CiljPrikaz = (props) => {

    const brisi = () => {
        props.brisanje(props.id)
    }

 return (
    <TouchableOpacity onPress={brisi}>
    <View style={stilovi.lista}>
        <Text>{props.naslov} - {props.id}</Text>
    </View>
    </TouchableOpacity>
 )
}
const stilovi = StyleSheet.create({
    lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#acc',
    borderColor: 'black',
    borderWidth: 1
 }
})
export default CiljPrikaz;