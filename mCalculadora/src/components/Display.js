import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.areaDisplay}>
            <Text style={styles.txtDisplay}>{props.screenValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txtDisplay: {
        fontSize: 60,
        textAlign: 'right',
        color: '#fff',
        padding:20
    },
    areaDisplay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end'
    }
})