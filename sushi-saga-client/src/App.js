import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    total: 100,
    eatenSushi: []
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => 
      this.setState({
        sushis: [...sushis]
      })
    )
  }

  handleEatenSushi = (price , id) => {
    if (this.state.total >= price) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, id],
        total: this.state.total - price 
      })
    }
  }

  handleSushiIndex = () => {
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  addMoney = (money) => {
    this.setState((prevState) => ({
      total: prevState.total + parseInt(money)
      })
    )
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          handleEatenSushi={this.handleEatenSushi} 
          eatenSushi={this.state.eatenSushi} 
          handleSushiIndex={this.handleSushiIndex}
          sushiIndex={this.state.sushiIndex}
        />
        <Table 
          total={this.state.total} 
          eatenSushi={this.state.eatenSushi} 
          addMoney={this.addMoney}
        />
      </div>
    );
  }
}

export default App;