import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Icon,
  Right,
  Content,
  Card,
  CardItem,
} from 'native-base';

export class ArticlesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  getListArticles = async () => {
    try {
      let response = await fetch('http://185.216.25.54:8082/api/articles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({data: responseJson.data});
    } catch (error) {
      console.error('error', error);
    }
  };

  renderRow = () => {
    return this.state.data.map(article => {
      return (
        <Card key={article.id}>
          <CardItem header>
            <Text style={{color: 'black'}}>{article.title}</Text>
          </CardItem>

          <CardItem>
            <Body>
              <Text note>URL: {article.URL}</Text>
              {article.content == null ? (
                <Text>...</Text>
              ) : (
                <Text>{article.content}</Text>
              )}
            </Body>
          </CardItem>
          <CardItem footer>
            {article.author == null ? (
              <Text>Anonymous</Text>
            ) : (
              <Text>{article.author}</Text>
            )}
          </CardItem>
        </Card>
      );
    });
  };
  render() {
    this.getListArticles();
    return (
      <Container>
        <Header>
          <Body>
            <Title>List Of Articles</Title>
          </Body>
          <Right>
            <Icon name="addfile" type="AntDesign" style={{color: 'white'}} />
          </Right>
        </Header>
        <Content>{this.renderRow()}</Content>
      </Container>
    );
  }
}

export default ArticlesScreen;
