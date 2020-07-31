import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'

export default props => {
    const styleButton = [styles.defButton]
    props.double ? styleButton.push(styles.double) : false
    props.operation && props.label !== '=' ? styleButton.push(styles.operation) : false

    return (
        <TouchableHighlight
            onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    defButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        borderWidth: 1,
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    double: {
        width: Dimensions.get('window').width / 2,
    },
    operation: {
        backgroundColor: '#fa8231'
    }
})