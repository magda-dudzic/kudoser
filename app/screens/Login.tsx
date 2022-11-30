import { Button, Text, TextInput } from "@react-native-material/core";
import React, { useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Controller, useForm } from "react-hook-form";

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const passwordRef = useRef();

  return (
    <View style={styles.formWrapper}>
      {/* <Text style={styles.heading}>Login</Text> */}
      <Image
        source={require("../../assets/Cambium_Logo.png")}
        style={{ width: 225, height: 100, marginBottom: 30 }}
      />
      <View>
        <Controller
          control={control}
          rules={{ required: true }}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              variant="standard"
              onChangeText={onChange}
              value={value}
              label="Email"
              color={"#337078"}
              returnKeyType="next"
              style={styles.input}
              onSubmitEditing={() => passwordRef?.current?.focus()}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              variant="standard"
              onChangeText={onChange}
              value={value}
              label="Password"
              secureTextEntry={true}
              color={"#337078"}
              returnKeyType="next"
              style={styles.input}
              onSubmitEditing={() => navigation.navigate("Main")}
              returnKeyType="send"
              ref={passwordRef}
            />
          )}
        />
        <Button
          title={"Login"}
          onPress={() => navigation.navigate("Main")}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#337078",
    marginBottom: 30,
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    alignSelf: "center",
    paddingBottom: 30,
  },
  button: {
    backgroundColor: "#337078",
    marginTop: 20,
  },
  input: {
    width: 300,
    marginVertical: 10,
  },
});

export default LoginScreen;
