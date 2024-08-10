import React from 'react';
import {Control, Controller, FieldErrors, FieldValues} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface FormInputControllerProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  placeholder: string;
  other?: TextInputProps;
}

const FormInputController = ({
  control,
  name,
  placeholder,
  errors,
  other,
}: FormInputControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#00453"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...other}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FormInputController;
