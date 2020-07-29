import React, { Fragment } from 'react'
import { View, Text } from 'react-native'

import Estilo from '../estilo'
import Produtos from './produtos'
import produtos from './produtos'

export default (props) => {

    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>
                {p.id}) {p.nome} tem preço de R${p.preco}
            </Text>
        })
    }

    return (
        <Fragment>
            <Text style={Estilo.txtG}>
                Lista de produtos
            </Text>
            {obterLista()}
        </Fragment>
    )
}