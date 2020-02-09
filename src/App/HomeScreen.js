import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import {getListCryptos} from '../Actions/crypto';
import {SvgUri} from 'react-native-svg';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Welcome to the app!',
  };
  componentDidMount() {
    this.props.getListCryptos();
  }

  renderRowList = () => {
    const {res} = this.props;
    return res.data.map((item, index) => {
      console.log('item', item);
      const url = item.URL.split('/').pop();
      const extensionFile = url.split('.').pop();
      console.log('extensionFile', extensionFile);
      return (
        <ListItem avatar key={item.id}>
          <Left>
            {extensionFile === 'svg' ? (
              <SvgUri style={styles.imageLogo} uri={item.URL} />
            ) : (
              <Thumbnail
                style={styles.imageLogo}
                source={{
                  uri: item.URL,
                }}
              />
            )}
          </Left>
          <Body>
            <Text>
              {item.name}, {item.IDs}
            </Text>
            <Text note>{item.currentPrice} $</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      );
    });
  };

  render() {
    console.log('cryptos', this.props);
    return (
      <Container>
        <Content>
          <List>
            {this.props.res === undefined ? (
              <Text>Hello</Text>
            ) : (
              this.renderRowList()
            )}
            {/* <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
          </List>
        </Content>
      </Container>
    );
  }

  _signOutAsync = async () => {
    this.props.dispatch({type: 'LOGOUT_REQUEST'});
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  imageLogo: {
    height: 50,
    width: 50,
  },
});

const mapStateToProps = state => ({
  res: state.cryptos.payload,
});

const mapDispatchToProps = dispatch => {
  return {
    getListCryptos: () => dispatch(getListCryptos()),
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
