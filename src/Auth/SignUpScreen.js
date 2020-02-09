import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import {register} from '../Actions/register';
import {connect} from 'react-redux';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      firstName: undefined,
      lastName: undefined,
      password: undefined,
    };
  }

  _signInAsync = () => {
    // eslint-disable-next-line no-shadow
    const {register} = this.props;
    const {email, password, firstName, lastName} = this.state;
    try {
      register(email, firstName, lastName, password);
      const result = this.props.res.payload.success;
      this.props.navigation.navigate(result ? 'SignIn' : 'SignUp');
    } catch (error) {
      console.error('error', error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.formContent}>
          <TextInput
            placeholder="First name"
            onChangeText={firstName => this.setState({firstName})}
            style={styles.formInput}
            value={this.state.firstName}
          />
          <TextInput
            placeholder="Last name"
            onChangeText={lastName => this.setState({lastName})}
            style={styles.formInput}
            value={this.state.lastName}
          />
          <TextInput
            placeholder="Email"
            keyboardType={'email-address'}
            onChangeText={email => this.setState({email})}
            style={styles.formInput}
            autoCompleteType="email"
            value={this.state.email}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            style={styles.formInput}
            autoCompleteType={'password'}
          />
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={this._signInAsync}>
            <Text>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  res: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    register: (email, firstName, lastName, password) =>
      dispatch(register(email, firstName, lastName, password)),
  };
};

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

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
