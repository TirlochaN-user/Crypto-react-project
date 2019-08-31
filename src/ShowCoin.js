import React,{Component} from 'react';
import Form from './Form';
class ShowCoin extends Component{
    state={
        id:null,
        symbol:null,
        name:null
    }
    addcoin= (namereceived) => {
        this.setState({
            name: namereceived
        })

    }
    render(){
        const coins=this.state;
        const Coindetails= (coins.name!=null) ? 
        (
            <div>
                Got the coins details
            </div>
        ) : 
        (
            <div>
                <Form add={this.addcoin} />
            </div>
        );
        return(
            <div>
                {Coindetails}
            </div>
        )
    }
}
export default ShowCoin;