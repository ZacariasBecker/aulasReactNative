import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import params from './params'
import Field from './components/Field'

export default props => {
  return (
    <View style={style.container}>
      <Text style={style.welcome}>Iniciando o Mines</Text>
      <Text style={style.welcome}>Tamanho da grade:
      {params.getColumnsAmount()}x{params.getRowsAmount()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {

  }
})