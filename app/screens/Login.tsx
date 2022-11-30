import { TextInput } from "@react-native-material/core";
import React from "react";
import { View } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <TextInput
        //   onChangeText={onChange}
        variant="standard"
        label="Email"
        //   value={value}
        //   style={styles.input}
        color={"#337078"}
        returnKeyType="next"
        //   onSubmitEditing={() => kudosInputRef?.current?.focus()}
      />
    </View>
  );
};

export default LoginScreen;
