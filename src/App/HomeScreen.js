import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
  Header,
  Title,
  Icon,
} from 'native-base';
import {getListCryptos} from '../Actions/crypto';
import {getPriceEvolCryptos} from '../Actions/priceEvolution';
import {SvgUri} from 'react-native-svg';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.user.id,
      cryptoList: [],
    };
  }

  getListCryptos = async () => {
    console.log('id', this.state.id);
    try {
      let response = await fetch(
        'http://185.216.25.54:8082/api/users/' + this.state.id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({cryptoList: responseJson.user.cryptos});
    } catch (error) {
      console.error('error', error);
    }
  };
  componentDidMount() {
    this.props.getListCryptos();
  }

  renderRowList = () => {
    return this.state.cryptoList.map(item => {
      const url = item.URL.split('/').pop();
      const extensionFile = url.split('.').pop();
      return (
        <ListItem
          avatar
          key={item.id}
          onPress={() =>
            this.props.navigation.navigate('Details', {
              arg: item.IDs,
            })
          }>
          <Left>
            {extensionFile === 'svg' ? (
              <SvgUri scale={0.5} width={50} height={50} uri={item.URL} />
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
          <Right style={{justifyContent: 'center'}}>
            <Icon name="ios-arrow-forward" type="Ionicons" />
          </Right>
        </ListItem>
      );
    });
  };

  render() {
    const {user, navigation, crypto} = this.props;
    this.getListCryptos();
    return (
      <Container>
        <Header>
          <Body>
            <Title>Crypto-currencies</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CryptoList', {
                  list: crypto.data,
                  userID: user.id,
                })
              }>
              <Icon name="add-to-list" type="Entypo" style={{color: 'white'}} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <List>
            {user === undefined ? (
              <Text>Add Crypto</Text>
            ) : (
              this.renderRowList()
            )}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    height: 50,
    width: 50,
  },
});

const mapStateToProps = state => ({
  crypto: state.cryptos.payload,
  user: state.auth.payload.data,
});

const mapDispatchToProps = dispatch => {
  return {
    getListCryptos: () => dispatch(getListCryptos()),
    getPriceEvolCryptos: arg => dispatch(getPriceEvolCryptos(arg)),
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
