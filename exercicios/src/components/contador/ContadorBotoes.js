import React, { Fragment } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default (props) => {
    return (
        <Fragment>
            <View style={style.Botoes}>
                <Button title="+" onPress={props.inc} />
                <Button title="-" onPress={props.dec} />
            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row',
    }
})