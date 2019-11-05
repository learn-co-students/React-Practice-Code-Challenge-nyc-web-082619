import React, { Component } from 'react';

class WalletForm extends Component {
    
    state = {
        amount: ""
    }

    handleInput = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.amount);
        
        this.props.addMoney(this.state.amount)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Add Some Money 
                    </label>
                    <input onChange={this.handleInput} type="number" name="Jeff" value={this.state.amount} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default WalletForm;