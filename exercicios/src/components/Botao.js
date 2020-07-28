import React, { Fragment } from 'react'
import { Button } from 'react-native'

export default (props) => {

    function executar() {
        console.warn('Executando #01!')
    }

    return (
        <Fragment>
            <Button title="Executar #01!"
                onPress={executar}
            />
            <Button
                title="Executar #02!"
                onPress={
                    function () {
                        console.warn('Executando #02!')
                    }
                }
            />
            <Button
                title="Executar #03!"
                onPress={() => console.warn('Executando #03!')}
            />
        </Fragment>
    )
}