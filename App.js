import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Input from "./src/image/Components/TextInput";
import Button from "./src/image/Components/Button";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount() {
    console.log("DİD MOUNT WORKED");
  }

  componentWillUnmount() {
    console.log("WİLL UNMOUNT WORKED");
  }

  render() {
    console.log("Render Method start");

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          {/*Logo image*/}
          <View style={[styles.subContainer, { flex: 2 }]}>
            <Image
              source={require("./src/image/logo.png")}
              style={styles.logo}
            ></Image>
          </View>

          {/* Form */}
          <View style={[styles.subContainer, { flex: 3 }]}>
            <Input
              placeholder={"Phone number, username or  email"}
              keyboardType={"email-address"}
              value={this.state.username}
              onChangeText={(value) => this.setState({ username: value })}
            />

            <Input
              placeholder={"Password"}
              secureTextEntry={true}
              keyboardType={"numeric"}
              value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })}
            />

            <View
              style={{
                flexDirection: "row",
                width: "90%",
                marginBottom: 40,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "white",
                    borderWidth: 1,
                    marginRight: 10,
                    borderColor: "gray",
                  }}
                ></TouchableOpacity>

                <Text>Hide password</Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={[styles.blueText, { fontSize: 15, marginLeft: 16 }]}
                >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            {/* Register Button */}
            <Button
              text={"Login"}
              onPress={() => {
                console.log(
                  "USERNAME :",
                  this.state.username,
                  "PASSWORD",
                  this.state.password
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "center",
            }}
          >
            <View style={styles.line} />
            <Text
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              OR
            </Text>
            <View style={styles.line} />
          </View>

          {/* Login with Facebook */}
          <View
            style={[
              styles.subContainer,
              {
                flex: 0.5,
                borderTopWidth: 0.5,
                borderTopColor: "gray",
                flexDirection: "row",
              },
            ]}
          >
            <Image
              source={require("./src/image/facebook.png")}
              style={styles.facebook_logo}
            ></Image>
            <Text style={[styles.blueText, { fontSize: 18, marginLeft: 15 }]}>
              {" "}
              Login with Facebook
            </Text>
          </View>

          {/* Bottom */}
          <View
            style={[
              styles.subContainer,
              { flex: 0.5, borderTopWidth: 0.5, borderTopColor: "gray" },
            ]}
          >
            <Text style={styles.mainText}>Don't have an account?</Text>
            <Text style={styles.blueText}> Sign up</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  mainText: { color: "gray" },
  blueText: { color: "#4495cb", fontWeight: "bold" },
  subContainer: { alignItems: "center", justifyContent: "center" },
  logo: { width: 200, height: 100 },
  facebook_logo: { width: 30, height: 30 },
  line: { width: "40%", height: 0.5, backgroundColor: "gray" },
};
