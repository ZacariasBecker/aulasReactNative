import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

// import Primeiro from './components/Primeiro'
// import Comp from './components/Mult'
// import { Comp1, Comp2, Comp3 } from './components/Mult'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
//import Diferenciar from './components/Diferenciar'
//import ParImpar from './components/ParImpar'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import UsuarioLogado from './components/UsuarioLogado'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import FlexBoxV1 from './components/layout/FlexBoxV1'
//import FlexBoxV2 from './components/layout/FlexBoxV2'
//import FlexBoxV3 from './components/layout/FlexBoxV3'
//import FlexBoxV4 from './components/layout/FlexBoxV4'
import Mega from './components/mega/Mega'

export default () => {
    return (
        <SafeAreaView style={style.App}>

            <Mega qNumeros={7} />
            {/*
            <FlexBoxV4 />
            <FlexBoxV3 />
            <FlexBoxV2 />
            <FlexBoxV1 />
            <DigiteSeuNome />
            <ListaProdutosV2 />
            <ListaProdutos />
            <UsuarioLogado usuario={{ nome: "gui", email: "gui@email.com" }} />
            <UsuarioLogado usuario={{ nome: "Ana" }} />
            <UsuarioLogado usuario={{ email: "carlos@email.com" }} />
            <UsuarioLogado usuario={null} />
            <UsuarioLogado usuario={{}} />
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva" />
                <Membro nome="Julia" sobrenome="Silva" />
                <Membro nome="Gui" sobrenome="Silva" />
                <Membro nome="Rebeca" sobrenome="Silva" />
            </Familia>
            <ParImpar num = {3}/>
            <Diferenciar />
            <ContadorV2 />
            <Pai />
            <Pai />
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
        </SafeAreaView>
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