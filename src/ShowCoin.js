import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
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
    description="";
    descr_elem;
    nametoid = (name) => {
        let id = name.replace(/ /g, "-");
        id = id.toLowerCase();
        return (id);
    }
    addcoin = (namereceived) => {
        const id = this.nametoid(namereceived);
        axios.get('https://api.coingecko.com/api/v3/coins/' + id)
            .then(resolve => {
                this.setState({
                    details: resolve.data
                })
            }) 


    }
    render() {
        const coins = this.state.details;
        if(coins.name!=null)
        {
            this.description=this.state.details.description.en;
            this.descr_elem= ReactHtmlParser(this.description);
        }
        const Coindetails = (coins.name != null) ?
            (
                <div>
                    <Form add={this.addcoin} />
                    <div className="panel-container">
                        <div className="panel-title">
                            <a href={this.state.details.links.homepage[0]} target="blank"><span>{this.state.details.name}-{this.state.details.symbol}</span></a>
                        </div>
                        <div className="panel-body">
                            <div className="left-panel">
                                <img src={this.state.details.image.large} alt={this.state.details.name}></img>
                                <div className="left-panel-description">
                                    Country Of Origin : {this.state.details.country_origin}<br /><br />
                                    Date of Appearance : {this.state.details.genesis_date}<br /><br />
                                    Market Cap Rank : {this.state.details.market_cap_rank}<br /><br />
                                    Coin Gecko-<br />
                                    Rank : {this.state.details.coingecko_rank}<br />
                                    Score : {this.state.details.coingecko_score}<br /><br />
                                    Developer Score : {this.state.details.developer_score}<br /><br />
                                    Community Score : {this.state.details.community_score}<br /><br />
                                    Liquidity Score : {this.state.details.liquidity_score}<br /><br />
                                    Public Interest Score : {this.state.details.public_interest_score}<br /><br />
                                </div>
                            </div>
                            <div className="body-description">
                                {this.descr_elem}
                            </div>
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