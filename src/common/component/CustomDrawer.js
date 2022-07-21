import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import {Scale,verticalScale,IMAGE } from "../constants"
// import * as IMAGECONST from "../theme/ImageConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const drawerData = [
  {
    id: 1,
    // image: IMAGECONST.HOME_IN_ACT,
    boxText: "Home",
    navigation: "HomeScreen",
  },
  {
    id: 2,
    // image: IMAGECONST.ORDERICON,
    boxText: "Wifi Credentials",
    // navigation: "OrderDetails",
  },
  {
    id: 3,
    // image: IMAGECONST.MYCATICON,
    boxText: "Rooms",
    // navigation: "StoreManagementNew",
  },
  {
    id: 4,
    // image: IMAGECONST.TERMCONDICON,
    boxText: "Schedules",
    // navigation: "TermsCondistion",
  },
  {
    id: 5,
    // image: IMAGECONST.ASKICON,
    boxText: `Scenes`,
    // navigation: "QusAnsScreen",
  },
  {
    id: 6,
    // image: IMAGECONST.CONTACTSIDEMENU,
    boxText: "Favorites",
    // navigation: "ContactScreen",
  },
  {
    id: 7,
    // image: IMAGECONST.MYTRANSSIDE,
    boxText: "Settings",
    // navigation: "TransactionScreen",
  },
  {
    id: 8,
    // image: IMAGECONST.MYCHATICON,
    boxText: "Contact Us",
    // navigation: "UserChat",
  },
];

export default class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);
  }


  renderTopConatiner = () => {
    return (
      <View style={styles.menuWrapper}>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
            {/* <Image
              style={styles.closeDrawerIcon}
              source={IMAGE.profile}
            /> */}
          </TouchableOpacity>
          {/* <Image style={styles.menuIcon} source={IMAGECONST.USER_ICON} /> */}
          <Text style={styles.userTitle}>Sam rechard</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.locationIcon}
              source={IMAGE.profile}
            />
            <Text style={styles.userLocationText}>Stockholm, Sweden</Text>
          </View>
          {/* <TouchableOpacity
            onPress={() => this.gotTOProfile()}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>My Account</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  renderDrawerCell = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.closeDrawer();
          this.props.navigation.navigate(item.navigation);
        }}
        style={styles.renderDrawerBox}
      >
        {/* <Image style={styles.drawerBoxIcon} source={item.image} /> */}
        <Text style={styles.drawerBoxText}>{item.boxText}</Text>
      </TouchableOpacity>
    );
  };

  renderDrawerContainer = () => {
    return (
      <View style={styles.renderCategoriesListContainer}>
        <FlatList
          data={drawerData}
          renderItem={({ item }) => this.renderDrawerCell(item)}
          // horizontal={true}
          scrollEnabled={false}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  render() {
    return (
      <>
        {this.renderTopConatiner()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderDrawerContainer()}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  menuWrapper: {
    marginTop: Scale(45),
    paddingLeft: Scale(25),
  },

  iconStyle: {
    width: Scale(27),
    height: Scale(27),
  },

  closeDrawerIcon: {
    width: Scale(40),
    height: Scale(40),
    resizeMode: "contain",
    marginLeft: Scale(260),
  },

  menuIcon: {
    width: Scale(92),
    height: Scale(92),
    resizeMode: "contain",
    marginTop: -20,
  },

  userTitle: {
    color: "#222222",
    textAlign: "left",
    textAlignVertical: "top",
    fontSize: Scale(24),
    fontWeight: "700",
    fontFamily: "Metropolis",
  },

  userLocationText: {
    color: "#9D9D9D",
    textAlignVertical: "top",
    fontSize: Scale(15),
    fontWeight: "500",
    marginTop: verticalScale(12),
    marginLeft: Scale(5),
    // fontFamily: 'Circular Std'
  },

  buttonContainer: {
    marginTop: verticalScale(20),
    marginLeft: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    width: Scale(130),
    height: Scale(40),
    backgroundColor: "#3B70C0",
    borderRadius: Scale(20),
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "left",
    textAlignVertical: "top",
    fontSize: Scale(16),
    fontWeight: "700",
    // fontFamily: 'Circular Std'
  },

  renderCategoriesListContainer: {
    marginLeft: Scale(10),
  },

  renderDrawerBox: {
    width: Scale(130),
    margin: Scale(5),
    paddingBottom: Scale(10),
    borderBottomWidth:1,
    borderBottomColor:"#E5DFED",
    borderStyle: "solid",
  },

  drawerBoxIcon: {
    width: Scale(25),
    height: Scale(25),
    resizeMode: "contain",
    marginTop: verticalScale(25),
    marginLeft: Scale(20),
  },

  drawerBoxText: {
    color: "#1D232E",
    fontWeight: "500",
    fontSize: Scale(16),
    fontWeight: "500",
    marginTop: verticalScale(15),
    marginLeft: Scale(20),
  },

  locationIcon: {
    width: Scale(60),
    height: Scale(60),
    marginTop: verticalScale(15),
    resizeMode: "contain",
  },
});
