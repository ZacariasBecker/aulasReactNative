import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

function Comp0() {
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Estilo.txtG}>Comp #001</Text>
}

function Comp2() {
    return <Text style={Estilo.txtG}>Comp #002</Text>
}

export function Comp3() {
    return <Text style={Estilo.txtG}>Comp #003</Text>
}

export default Comp0
export { Comp1, Comp2 }
