import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomHeader} from "../../common/component"

const Scene = (props) => {
  const {navigation} = props;
  return (
    <View>
      <CustomHeader navigation={navigation}/>
    </View>
  )
}

export default Scene

const styles = StyleSheet.create({})