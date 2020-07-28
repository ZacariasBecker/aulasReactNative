import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import Comp from './components/Mult'
import { Comp1, Comp2, Comp3 } from './components/Mult'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/indireta/Pai'

export default () => {
    return (
        <View style={style.App}>

            <Pai />

            {/*
            <Contador inicial={50} passo={13} />
            <Contador />
            <Botao />
            <Titulo principal="Cadastro produto" secundario="Tela de cadastro do produto" />
            <Aleatorio n1={10} n2={20}/>
            <Aleatorio n1={40} n2={30}/>
            <MinMax min={3} max={20} />
            <MinMax min={1} max={94} />
            <Comp />
            <Comp1 />
            <Comp2 />
            <Comp3 />
            <Primeiro /> 
            */}
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center', // Alinha a centro o conteudo no eixo principal (y)
        alignItems: 'center', // Alinha a centro o conteudo no eixo secundario (x)
        padding: 20,

    }
})