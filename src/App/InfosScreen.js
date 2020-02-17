import React, {Component} from 'react';
import {
  Text,
  Card,
  Icon,
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Right,
  CardItem,
  Thumbnail,
} from 'native-base';
import {connect} from 'react-redux';

export class InfosScreen extends Component {
  _signOutAsync = () => {
    this.props.dispatch({type: 'LOGOUT_REQUEST'});
    this.props.navigation.navigate('Auth');
  };
  render() {
    const {user} = this.props;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://www.pngitem.com/pimgs/m/247-2472306_admin-anonymous-person-icon-hd-png-download.png',
                  }}
                />
                <Body>
                  <Text>
                    {user.firstName} {user.lastName}
                  </Text>
                  <Text note>{user.role}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Icon name="email" type="MaterialCommunityIcons" />
                <Body>
                  <Text>Change email</Text>
                  <Text note>{user.email}</Text>
                </Body>
              </Left>
              <Right>
                <Icon active name="ios-arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="onepassword" type="MaterialCommunityIcons" />
                <Body>
                  <Text>Change password</Text>
                  <Text note>***********</Text>
                </Body>
              </Left>
              <Right>
                <Icon active name="ios-arrow-forward" />
              </Right>
            </CardItem>
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

const mapStateToProps = state => ({
  user: state.auth.payload.data,
});

export default connect(mapStateToProps)(InfosScreen);
