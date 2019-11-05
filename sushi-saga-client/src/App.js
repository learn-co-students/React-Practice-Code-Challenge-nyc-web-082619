import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    sushisEaten: [],
    money: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis=> this.setState({
      sushis: sushis
    }))
  }

  eatSushi = id => {
    const sushi = this.state.sushis.find(sushi => sushi.id === id)
    this.setState({
      sushisEaten: [...this.state.sushisEaten, sushi],
      money: (this.state.money - sushi.price)
    })
  }
  updateWallet = event => {
    event.preventDefault()
    this.setState({
      money: +(this.state.money) + +(event.target.money.value)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          money={this.state.money} 
          eatSushi={this.eatSushi} 
          sushis={this.state.sushis} 
        />
        <Table 
          updateWallet={this.updateWallet} 
          money={this.state.money} 
          sushis={this.state.sushisEaten}
          />
      </div>
    );
  }
}

export default App;