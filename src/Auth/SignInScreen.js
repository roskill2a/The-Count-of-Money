import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import {login} from '../Actions/login';
import {connect} from 'react-redux';

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

  componentDidUpdate() {
    if (this.props.res.isAuthenticated) {
      this.props.navigation.navigate('App');
    }
  }

  _signInAsync = async () => {
    // eslint-disable-next-line no-shadow
    const {login} = this.props;
    try {
      await login(this.state.email, this.state.password);
    } catch (error) {
      console.error('error', error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SIGN IN</Text>
        <View style={styles.formContent}>
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
            <Text>Sign In!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Sign UP!</Text>
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
    login: (email, password) => dispatch(login(email, password)),
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
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
