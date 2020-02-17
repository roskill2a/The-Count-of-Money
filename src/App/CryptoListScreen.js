import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  ListItem,
  Content,
  List,
  Left,
  Right,
  Body,
  Thumbnail,
  Icon,
} from 'native-base';
import {SvgUri} from 'react-native-svg';

export class CryptoListScreen extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.state = {
      data: this.props.navigation.getParam('list', 'none'),
      userID: this.props.navigation.getParam('userID', 'none'),
    };
  }

  addToList = async arg => {
    console.log('user', this.state.userID);
    try {
      let response = await fetch(
        'http://185.216.25.54:8082/api/users/' +
          this.state.userID +
          '/crypto/' +
          arg,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let responseJson = await response.json();
      console.log('response', responseJson);
      alert('Added');
    } catch (error) {
      console.error('error', error);
    }
  };

  renderRow = () => {
    console.log(this.state.data);
    return this.state.data.map(item => {
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
          <Right style={{justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => this.addToList(item.IDs)}
              style={{borderWidth: 1}}>
              <Text>Add to list</Text>
            </TouchableOpacity>
          </Right>
        </ListItem>
      );
    });
  };

  render() {
    console.log('render ', this.state.data);
    return (
      <Container>
        <Content>
          <List>{this.renderRow()}</List>
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

export default CryptoListScreen;
