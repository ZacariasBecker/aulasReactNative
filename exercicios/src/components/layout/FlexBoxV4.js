import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'

export default (props) => {

    return (
        <Fragment>
            <View style={style.FlexV4}>
                <View style={style.V0} />
                <View style={style.V1} />
                <View style={style.V2} />
            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        height: 300,
        backgroundColor: '#8312ed'
    },
    V1: {
        flexGrow: 5,
        backgroundColor: '#ff801a'
    },
    V2: {
        flexGrow: 1,
        backgroundColor: '#50d1f6'
    },
})