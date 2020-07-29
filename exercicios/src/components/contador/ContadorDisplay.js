import React, { Fragment } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Estilo from '../estilo'

export default (props) => {



    return (
        <Fragment>
            <View style={style.Display}>
                <Text style={[Estilo.txtG, style.DisplayText]}>
                    {props.num}
                </Text>
            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: 'black',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: 'white',
    }
})