import React, { Fragment } from 'react'
import { View, Text, Button } from 'react-native'

export default (props) => {

    function gerarNumero(min, max) {
        return Math.random().toFixed(1) * (max - min) + min
    }

    return (
        <Fragment>
            <Button
                title="Executar"
                onPress={function () {
                    const n = gerarNumero(props.min, props.max)
                    props.funcao(n,"O valor é:")
                }}
            />
        </Fragment >
    )
}