import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomHeader} from "../../common/component"
const Setting = (props) => {
const {navigation} = props;

  return (
<CustomHeader navigation={navigation}/>
  )
}

export default Setting

const styles = StyleSheet.create({})