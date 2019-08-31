import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
class ShowCoin extends Component {
    state = {
        details: [
            {
                id: null,
                symbol: null,
                name: null
            }
        ]
    }
    addcoin = (namereceived) => {
        axios.get('https://api.coingecko.com/api/v3/coins/' + namereceived)
            .then(resolve => {
                this.setState({
                    details: resolve.data
                })
                console.log(this.state.details);
            })


    }
    render() {
        const coins = this.state.details;
        const Coindetails = (coins.name != null) ?
            (
                <div>
                    <Form add={this.addcoin} />
                    <div className="panel-container">
                    <div className="title">
                    <a href={this.state.details.links.homepage[0]}><span>{this.state.details.name} {this.state.details.symbol}</span></a>
                    </div>
                </div>
                </div>
            ) :
            (
                <div>
                    <Form add={this.addcoin} />
                </div>
            );
        return (
            <div>
                {Coindetails}
            </div>
        )
    }
}
export default ShowCoin;