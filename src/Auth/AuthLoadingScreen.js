import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = this.props.res.isAuthenticated;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  res: state.auth,
});

export default connect(mapStateToProps)(AuthLoadingScreen);
