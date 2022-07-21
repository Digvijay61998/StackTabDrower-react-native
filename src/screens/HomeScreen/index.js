import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import React from 'react'
import { CustomHeader } from '../../common/component';
import CustomRooms from './CustomRooms';

const Home = (props) => {
const {navigation} = props;
    const renderHederComponents = () => {
        return (
          <LinearGradient
            colors={["#3B70C0", "#A44296"]}
            style={styles.renderHeaderContainer}
          >
            <View style={styles.headerContainerLogo}>
              <TouchableOpacity
                style={styles.menuIconContainer}
                onPress={() => props.navigation.goBack(null)}
              >
                {/* <Image style={styles.menuIcon} source={IMAGECONST.LEFTICON} /> */}
              </TouchableOpacity>
              <Text style={styles.storeTextName}>Profile</Text>
              <TouchableOpacity
                style={styles.menuIconRightContainer}
                onPress={() => navigation.navigate("Notifications")}
              >
                {/* <Image
                  style={[styles.menuIcon, { width: SWidth(15) }]}
                  source={IMAGECONST.NOTFICON}
                /> */}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        );
      };
      
  return (
    <View>
      <CustomHeader navigation={navigation}/>
      <CustomRooms/>
      {/* {renderHederComponents()} */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    // renderHeaderContainer: {
    //     paddingBottom: SHeight(2),
    //     borderBottomLeftRadius: Scale(10),
    //     borderBottomRightRadius: Scale(10),
    //   },
    //   headerContainerLogo: {
    //     alignItems: "center",
    //     marginTop: SHeight(3),
    //   },
    //   menuIconContainer: {
    //     position: "absolute",
    //     left: SWidth(2.5),
    //   },
    //   storeTextName: {
    //     fontSize: Scale(22),
    //     fontWeight: "600",
    //     lineHeight: Scale(30),
    //     fontFamily: "Metropolis-SemiBold",
    //     color: "#FFFFFF",
    //   },
    //   menuIconRightContainer: {
    //     position: "absolute",
    //     right: SWidth(2.5),
    //   },
})