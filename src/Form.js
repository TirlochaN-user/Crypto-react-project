import React, { Component } from 'react';
class Form extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input type="text" placeholder="Enter the Crypto Currency Name" className="form-input"></input>
                    <button className="form-btn">Get Info About Coin</button>
                </form>
            </div>
        )
    }
}
export default Form;