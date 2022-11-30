import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, View, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Text, TextInput, Button } from "@react-native-material/core";

export type KudosFormData = {
  user: string;
  colleague: string;
  points: string;
  message: string;
};

type KudosFormProps = { onSubmit: (form: KudosFormData) => void };

const KudosValues = [
  { value: 10, label: "10 Kudos" },
  { value: 20, label: "20 Kudos" },
  { value: 30, label: "30 Kudos" },
];

const Users = [
  { value: "Magda", label: "Magda" },
  { value: "Nathan C", label: "Nathan C" },
  { value: "Sami", label: "Sami" },
  { value: "Pip", label: "Pip" },
];

export default function KudosForm({ onSubmit }: KudosFormProps) {
  const { control, handleSubmit } = useForm();

  const kudosInputRef = useRef();
  const messageInputRef = useRef();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.formTitle}>
        Give Kudos to your favorite colleagues!
      </Text>
      <View style={styles.rowContainer}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="colleague"
          render={({ field: { onChange, value } }) => (
            <View style={styles.select}>
              <View>
                <RNPickerSelect
                  items={Users}
                  style={pickerSelectStyles}
                  placeholder={{
                    label: "Who's deserved some Kudos?",
                  }}
                  onValueChange={(val) => {
                    onChange(val);
                  }}
                />
              </View>
            </View>
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="user"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              variant="outlined"
              label="Who is giving the kudos?"
              value={value}
              style={styles.input}
              color={"#337078"}
              returnKeyType="next"
              onSubmitEditing={() => kudosInputRef?.current?.focus()}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="points"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              variant="outlined"
              label="Give some Kudos!"
              value={value}
              keyboardType={"number-pad"}
              style={styles.input}
              color={"#337078"}
              returnKeyType="next"
              onSubmitEditing={() => messageInputRef?.current?.focus()}
              ref={kudosInputRef}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="message"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              variant="outlined"
              multiline={true}
              numberOfLines={3}
              label="Write your message here"
              value={value}
              style={styles.input}
              color={"#337078"}
              returnKeyType="send"
              ref={messageInputRef}
            />
          )}
        />
      </View>
      <View>
        <Button
          onPress={handleSubmit((data) => {
            onSubmit(data as KudosFormData);
          })}
          title={"Submit"}
          style={styles.submitButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  formTitle: {
    marginVertical: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  rowContainer: {
    marginTop: 5,
    justifyContent: "center",
  },
  select: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 3,
    paddingHorizontal: 7,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  input: {
    marginVertical: 5,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: "#337078",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderColor: "gray",
    borderRadius: 5,
    color: "#337078",
    backgroundColor: "#fff",
  },
  inputAndroid: {
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
    backgroundColor: "#fff",
  },
  placeholder: {
    paddingLeft: 0,
    color: "#337078",
  },
});
