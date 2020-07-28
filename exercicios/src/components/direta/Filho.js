import React, { Fragment } from 'react'
import { View, Text } from 'react-native'

import Estilo from '../estilo'

export default (props) => {
    return (
        <Fragment>
            <Text style={Estilo.txtG}>{props.a}</Text>
            <Text style={Estilo.txtG}>{props.b}</Text>
        </Fragment>
    )
}