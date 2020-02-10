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

  checkPercentage = item => {
    const percent = (item.currentPrice - item.openingPrice) * 100;
    if (item.currentPrice > item.openingPrice) {
      return (
        <View style={{alignItems: 'center'}}>
          <Icon type="AntDesign" name="arrowup" style={{color: 'green'}} />
          <Text style={{color: 'green'}}>{percent.toFixed(2)} %</Text>
        </View>
      );
    } else {
      return (
        <View style={{alignItems: 'center'}}>
          <Icon type="AntDesign" name="arrowdown" style={{color: 'red'}} />
          <Text style={{color: 'red'}}>{percent.toFixed(2)} %</Text>
        </View>
      );
    }
  };

  renderRowList = () => {
    const {crypto} = this.props;
    return crypto.data.map(item => {
      const url = item.URL.split('/').pop();
      const extensionFile = url.split('.').pop();
      return (
        <ListItem avatar key={item.id}>
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
          <Right>{this.checkPercentage(item)}</Right>
        </ListItem>
      );
    });
  };

  render() {
    const {user} = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Crypto-currencies</Title>
          </Body>
          <Right>
            {user.role === 'ADMIN' ? (
              <TouchableOpacity>
                <Icon
                  name="add-to-list"
                  type="Entypo"
                  style={{color: 'white'}}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </Right>
        </Header>
        <Content>
          <List>
            {this.props.crypto === undefined ? (
              <Text>Hello</Text>
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
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
