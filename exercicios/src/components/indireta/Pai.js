import React, { Fragment, useState } from 'react'
import { View, Text } from 'react-native'

import Filho from './Filho'
import Estilo from '../estilo'

export default (props) => {

    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <Fragment>
            <Text style={Estilo.txtG}>{num}</Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </Fragment>
    )
}