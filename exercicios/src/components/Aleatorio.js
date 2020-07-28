import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    //console.warn(props)
    entre = (n1, n2) => {
        return Math.random().toFixed(1) * (n2 - n1) + n1
    }

    ordena = (n1, n2) => {
        if (n2 > n1) { return `${n1} e ${n2}` } else {
            return `${n2} e ${n1}`
        }
    }

    return (
        <Text style={Estilo.txtG}>
            {entre(props.n1, props.n2)} está entre {ordena(props.n1, props.n2)}
        </Text>
    )
}