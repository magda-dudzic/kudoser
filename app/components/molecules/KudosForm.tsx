import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export type KudosFormData = {
  user: string;
  colleague: string;
  points: string;
  message: string;
};

type KudosFormProps = { onSubmit: (form: KudosFormData) => void };

const KudosValues = [
  { value: 10, label: '10 Kudos Points!' },
  { value: 20, label: '20 Kudos Points!' },
  { value: 30, label: '30 Kudos Points!' },
];

const Users = [
  { value: 'Magda', label: 'Magda' },
  { value: 'Nathan Channon', label: 'Nathan Channon' },
  { value: 'Sami', label: 'Sami' },
];

export default function KudosForm({ onSubmit }: KudosFormProps) {
  const { control, handleSubmit } = useForm();
  const [isSelectionOn, setIsSelectionOn] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>
        Give Kudos to your favorite colleagues!!!
      </Text>
      <View style={styles.rowContainer}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="colleague"
          render={({ field: { onChange, value } }) => (
            <View style={styles.input}>
              {isSelectionOn ? (
                <View>
                  <RNPickerSelect
                    items={Users}
                    style={pickerSelectStyles}
                    placeholder={{
                      value: null,
                      label: 'Your beloved colleague!',
                    }}
                    onValueChange={(value) => {
                      onChange(value);
                    }}
                  />
                </View>
              ) : (
                <TextInput
                  onPressIn={() => setIsSelectionOn(true)}
                  value={value}
                  placeholder=""
                  placeholderTextColor={'rgba(0,0,0,0.4)'}
                />
              )}
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
              value={value}
              style={styles.input}
              placeholder="Who is giving the kudos?"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="points"
          render={({ field: { onChange, value } }) => (
            <View style={styles.input}>
              {isSelectionOn ? (
                <View>
                  <RNPickerSelect
                    items={KudosValues}
                    style={pickerSelectStyles}
                    placeholder={{
                      value: null,
                      label: 'Give some Kudos points!',
                    }}
                    onValueChange={(value) => {
                      onChange(value);
                    }}
                  />
                </View>
              ) : (
                <TextInput
                  onPressIn={() => setIsSelectionOn(true)}
                  value={value}
                  placeholder=""
                  placeholderTextColor={'rgba(0,0,0,0.4)'}
                />
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="message"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              multiline={true}
              numberOfLines={4}
              style={styles.input}
              value={value}
              placeholder="Leave a message!"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
            />
          )}
        />
      </View>
      <View>
        <Pressable
          onPress={handleSubmit((data) => {
            onSubmit(data as KudosFormData);
          })}
          style={styles.submitButton}
        >
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  formTitle: {
    marginBottom: 10,
  },
  rowContainer: {
    height: 200,
    marginTop: 5,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 20,
    margin: 3,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.4)',
  },
  submitButton: {
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'black',
  },
  inputAndroid: {
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'black',
  },
  placeholder: {
    paddingLeft: 0,
    color: 'rgba(0,0,0,0.4)',
  },
});
