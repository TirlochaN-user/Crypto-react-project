import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import './style.css';
import Header from './Header';
class App extends Component {
  state = {
    coins: []
  }
  componentDidMount() {
    axios.get('https://api.coingecko.com/api/v3/coins/list')
      .then(resolve => {
        this.setState({
          coins: resolve.data.slice(0, 10)
        });
      });
  }
  render() {
    const { coins } = this.state;
    console.log(coins);
    const coinsList = (coins.length > 0) ? (
      <Form />
    ) :
      (
        <div>
          <div className="loading-content"> Loading the Coins List </div>
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