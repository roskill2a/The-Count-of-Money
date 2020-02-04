import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
    };
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SIGN IN</Text>
        <View style={styles.formContent}>
          <TextInput
            onChangeText={email => this.setState({email})}
            style={styles.formInput}
            autoCompleteType="email"></TextInput>
          <TextInput
            password
            onChangeText={password => this.setState({password})}
            style={styles.formInput}
            autoCompleteType={'password'}></TextInput>
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={this._signInAsync}>
            <Text>Sign In!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContent: {
    alignContent: 'center',
  },
  formInput: {
    paddingLeft: 10,
    borderWidth: 1,
    height: 40,
    width: 300,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonForm: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffaa2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
