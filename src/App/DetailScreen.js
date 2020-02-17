import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {getPriceEvolCryptos} from '../Actions/priceEvolution';
import {LineChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundColor: '#193286',
  backgroundGradientFrom: '#193286',
  backgroundGradientTo: '#1B317D',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  legend: ['$'],
};

const screenWidth = Dimensions.get('window').width;

export class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arg: JSON.stringify(this.props.navigation.getParam('arg', 'none')),
      data: undefined,
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch(
        'http://185.216.25.54:8082/api/crypto/sparkline/' +
          this.state.arg.split('"'),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let responseJson = await response.json();
      const data = {
        labels: responseJson.data[0].timestamps,
        datasets: [
          {
            data: responseJson.data[0].prices,
          },
        ],
      };
      this.setState({data});
    } catch (error) {
      console.error('error', error);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.data ? (
          <LineChart
            data={this.state.data}
            width={screenWidth}
            height={300}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
            style={{
              margin: 4,
              borderRadius: 16,
            }}
          />
        ) : (
          <Text style={{justifyContent: 'center'}}>Loading...</Text>
        )}
      </View>
    );
  }
}
export default DetailScreen;
