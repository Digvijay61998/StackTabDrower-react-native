import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomHeader} from "../../common/component"
const Scheduler = (props) => {
const {navigation} = props;

  return (
<CustomHeader navigation={navigation}/>
  )
}

export default Scheduler

const styles = StyleSheet.create({})