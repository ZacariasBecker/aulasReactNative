import React, { Fragment, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Buttons from './components/Buttons'
import Display from './components/Display'

export default props => {

  const [screenValue, setScreenValue] = useState('0')
  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)
  const [operator, setOperator] = useState(null)

  commandAddNum = num => {
    if (screenValue.includes('.') && num === '.') {
      return
    } else if (screenValue === '0' && num === '.') {
      setScreenValue('0.')
    } else {
      screenValue === '0' ? setScreenValue(num) : setScreenValue(screenValue + num)
    }
  }
  commandAC = () => {
    setScreenValue('0')
    setValue1(null)
    setValue2(null)
  }
  commandC = () => {
    screenValue.length === 1 ?
      setScreenValue('0')
      : setScreenValue(screenValue.slice(0, -1))
  }
  commandOp = Op => {
    if (Op === '=') {
      setOperator(Op)
      if (value2 !== null) {
        setValue1(calculate())
        setScreenValue(calculate())
        setValue2('3')
      } else {
        setScreenValue(value1)
      }
    } else {
      value1 === null ? setValue1(screenValue) : setValue2(screenValue)
      setScreenValue('0')
    }
  }
  calculate = () => {
    return ('777')
  }

  return (
    <View style={styles.Container}>
      <Display screenValue={screenValue} />
      <Text>op: {operator}</Text>
      <Text>v1: {value1}</Text>
      <Text>v2: {value2}</Text>
      <View style={styles.buttons}>
        <Buttons label='AC' double onClick={commandAC} />
        <Buttons label='C' onClick={commandC} />
        <Buttons label='+' operation onClick={commandOp} />
        <Buttons label='7' onClick={commandAddNum} />
        <Buttons label='8' onClick={commandAddNum} />
        <Buttons label='9' onClick={commandAddNum} />
        <Buttons label='-' operation onClick={commandOp} />
        <Buttons label='4' onClick={commandAddNum} />
        <Buttons label='5' onClick={commandAddNum} />
        <Buttons label='6' onClick={commandAddNum} />
        <Buttons label='*' operation onClick={commandOp} />
        <Buttons label='1' onClick={commandAddNum} />
        <Buttons label='2' onClick={commandAddNum} />
        <Buttons label='3' onClick={commandAddNum} />
        <Buttons label='/' operation onClick={commandOp} />
        <Buttons label='.' onClick={commandAddNum} />
        <Buttons label='0' onClick={commandAddNum} />
        <Buttons label='=' double operation onClick={commandOp} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})