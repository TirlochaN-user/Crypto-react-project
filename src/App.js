import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Header from './Header';
import ShowCoin from './ShowCoin';
class App extends Component {
  state = {
    coins: []
  }
  componentDidMount() {
    axios.get('https://api.coingecko.com/api/v3/coins/list')
      .then(resolve => {
        this.setState({
          coins: resolve.data
        });
      });
  }
  render() {
    const { coins } = this.state;
    const coinsList = (coins.length > 0) ? (
      <ShowCoin />
    ) :
      (
        <div>
          <div className="loading-content"> Loading The Coins List </div>
        </div>
      );

    return (
      <div>
        <Header />
        {coinsList}

      </div>
    )
  }
}
export default App;