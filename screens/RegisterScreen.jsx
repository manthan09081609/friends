import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import userIcon from "../assets/icon.png";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(userIcon);

  const handleImageUpload = () => {
    setImage(userIcon);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10,
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            marginTop: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4a55a2", fontSize: 42, fontWeight: "700" }}>
            Register
          </Text>
        </View>
        <View>
          <View
            style={{
              marginTop: 30,
              paddingVertical: 40,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "70%",
              rowGap: 15,
              elevation: 2,
              backgroundColor: "#ffffff",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "90%",
                height: 100,
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity
                style={{ width: "100%", alignItems: "center" }}
                onPress={handleImageUpload}
              >
                <View>
                  <Image
                    source={image}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "90%",
                height: 100,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "#222222",
                  fontSize: 20,
                  fontWeight: "400",
                }}
              >
                Name
              </Text>
              <TextInput
                placeholder="enter your name"
                placeholderTextColor={"#000000"}
                style={{
                  color: "#000000",
                  fontSize: email ? 18 : 16,
                  marginVertical: 20,
                  borderBottomColor: "#222222",
                  borderBottomWidth: 1,
                  width: "100%",
                }}
                value={name}
                onChangeText={setName}
                textContentType="name"
              />
            </View>
            <View
              style={{
                width: "90%",
                height: 100,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "#222222",
                  fontSize: 20,
                  fontWeight: "400",
                }}
              >
                Email
              </Text>
              <TextInput
                placeholder="enter your email"
                placeholderTextColor={"#000000"}
                style={{
                  color: "#000000",
                  fontSize: email ? 18 : 16,
                  marginVertical: 20,
                  borderBottomColor: "#222222",
                  borderBottomWidth: 1,
                  width: "100%",
                }}
                value={email}
                onChangeText={setEmail}
                textContentType="emailAddress"
              />
            </View>
            <View
              style={{
                width: "90%",
                height: 100,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "#222222",
                  fontSize: 20,
                  fontWeight: "400",
                }}
              >
                Password
              </Text>
              <TextInput
                placeholder="enter your password"
                placeholderTextColor={"#000000"}
                style={{
                  color: "#000000",
                  fontSize: password ? 18 : 16,
                  marginVertical: 20,
                  borderBottomColor: "#222222",
                  borderBottomWidth: 1,
                  width: "100%",
                }}
                value={password}
                onChangeText={setPassword}
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Pressable
              style={{
                width: 200,
                backgroundColor: "#4a55a2",
                height: 60,
                justifyContent: "center",
                borderRadius: 15,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: 24,
                  fontWeight: "600",
                  padding: 10,
                }}
              >
                SignUp
              </Text>
            </Pressable>
            <Pressable
              style={{
                marginTop: 10,
                flexDirection: "row",
                columnGap: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.goBack()}
            >
              <View>
                <Text style={{ fontSize: 16 }}>Already have an account?</Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 17, color: "#4a55a2", fontWeight: "300" }}
                >
                  SignIn
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({});
