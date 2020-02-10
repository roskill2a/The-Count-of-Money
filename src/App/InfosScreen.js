import React, {Component} from 'react';
import {Image, ImageBackground, Platform, StyleSheet, View} from 'react-native';
import {
  Text,
  Card,
  Icon,
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import {connect} from 'react-redux';
import Separator from '../Components/separateur';
import Email from '../Components/email';

const mainColor = '#01C89E';

export class InfosScreen extends Component {
  onPressEmail = email => {};

  renderHeader = () => {
    const {res} = this.props;
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri:
              'https://www.forbes.fr/wp-content/uploads/2019/11/digital_yuan_freepik_licensed-740x370.jpeg',
          }}>
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri:
                  'https://www.pngitem.com/pimgs/m/247-2472306_admin-anonymous-person-icon-hd-png-download.png',
              }}
            />
            <Text style={styles.userNameText}>
              {res.firstName} {res.lastName}
            </Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="person"
                  underlayColor="transparent"
                  style={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>{res.role}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  renderEmail = () => {
    const {res} = this.props;
    return (
      <Email
        name={res.firstName + ' ' + res.lastName}
        email={res.email}
        onPressEmail={this.onPressEmail}
      />
    );
  };
  _signOutAsync = () => {
    this.props.dispatch({type: 'LOGOUT_REQUEST'});
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {this.renderEmail()}
            {Separator()}
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button danger iconLeft onPress={() => this._signOutAsync()}>
              <Icon name="logout" type="AntDesign" style={{color: 'white'}} />
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: mainColor,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  res: state.auth.payload.data,
});

export default connect(mapStateToProps)(InfosScreen);
