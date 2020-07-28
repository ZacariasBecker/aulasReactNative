import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default () => {
    console.warn('Efeito do console.warn!')
    return (
        <Text style={Estilo.txtG}>Primeiro</Text>
    )
}