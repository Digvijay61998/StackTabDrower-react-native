import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Scale,verticalScale,IMAGE,ICONS } from "../constants"
// import * as IMAGECONST from "../../src/theme/ImageConstants";
const CustomHeader = ({navigation}) => {
  
  return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Image style={styles.avatarIcon} source={ICONS.backButton} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
        <Image style={styles.headerLogo} source={IMAGE.SwitchlinkLogo} />
        </View>
          <TouchableOpacity
          onPress={() =>navigation.openDrawer()}
          >
            <Image style={styles.notfIcon} source={ICONS.drower} />
          </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  buttonContainer: {
    width: Scale(375),
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row",
    height: Scale(70),
    padding: Scale(15),
    position:"relative"
  },
  headerLogo:{
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  avatarIcon: {
    width: Scale(17),
    height: Scale(18),
    resizeMode: "contain",
  },

  headerTextContainer: {
    width:Scale(180),
    height: Scale(70),
  },

  headerText: {
    fontSize: Scale(22),
    color: "#FFFFFF",
    fontFamily: "Metropolis",
    fontWeight: "600",
  },

  userIcon: {
    marginTop: verticalScale(60),
    marginLeft: Scale(70),
    width: Scale(20),
    height: Scale(20),
    resizeMode: "contain",
  },

  notfIcon: {
    width: Scale(20),
    height: Scale(20),
    resizeMode: "contain",
  },
});
