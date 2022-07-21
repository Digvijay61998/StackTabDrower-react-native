import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomHeader} from "../../common/component"
const Favorites = (props) => {
const {navigation} = props;

return (
<CustomHeader navigation={navigation}/>
  )
}

export default Favorites

const styles = StyleSheet.create({})