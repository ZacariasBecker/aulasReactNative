import React, { Fragment } from 'react'
import { View, Text, ImagePropTypes } from 'react-native'

import Estilo from './estilo'
import If from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <Fragment>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}> Usuário Logado:</Text>
                <Text style={Estilo.txtG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </Fragment>
    )
}