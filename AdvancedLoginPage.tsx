import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import logo from './assests/logo.png';
import {Controller, useForm} from 'react-hook-form';
import FormInputController from './FormInputController';
import {yupResolver} from '@hookform/resolvers/yup';
import {formSchema} from './formSchema';

interface FormValues {
  email: string;
  password: string;
}

const AdvancedLoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    // console.log(data);

    Alert.alert('Form Data', JSON.stringify(data));
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.headingText}>A Software Platform</Text>

      <FormInputController
        control={control}
        name="email"
        placeholder="Email"
        errors={errors}
      />
      <FormInputController
        control={control}
        name="password"
        placeholder="Password"
        errors={errors}
        other={{secureTextEntry: true}}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.normalText}>Create new account.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000435',
  },
  logo: {
    width: 150,
    height: 100,
  },
  headingText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  normalText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
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
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdvancedLoginPage;
