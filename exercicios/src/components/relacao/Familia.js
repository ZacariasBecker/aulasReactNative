import React, { Fragment } from 'react'
import { View, Text } from 'react-native'

import Estilo from '../estilo'

export default (props) => {



    return (
        <Fragment>
            <Text style={Estilo.txtG}>Membros da Família:</Text>
            {props.children}
        </Fragment>
    )
}