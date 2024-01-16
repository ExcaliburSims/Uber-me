import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../constants/styles";
const SCREEN_WIDTH = Dimensions.get("window").width;

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#286ef0"
        translucent
      />
      <View style={styles.header}>
        <View style={styles.icon1}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.white}
            size={40}
          />
        </View>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Destress your commute</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                Read a book.Take a nap. Stare out the window
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RequestScreen", { state: 0 });
                }}
              >
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>Ride with Uber</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.image1}
                source={require("../../assets/uberCar.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: 30,
  },
  header: {
    backgroundColor: colors.blue,
    height: 50,
    alignItems: "flex-start",
  },
  icon1: { marginLeft: 10, marginTop: 5 },
  home: {
    backgroundColor: colors.blue,
    paddingLeft: 20,
    paddingTop: 80,
  },
  image1: {
    height: 100,
    width: 100,
  },
  text1: {
    color: colors.white,
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },
});

export default HomeScreen;
