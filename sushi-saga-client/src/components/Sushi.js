import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten : false
  }

  eat = () => {
    if(this.props.money > this.props.price){
      this.setState({
        eaten: true
      })
      this.props.eatSushi(this.props.id)
    }else{
      alert("You don't have enough money!!")
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.state.eaten ? null : this.eat}>
          { 
            this.state.eaten ?
              null
            :
              <img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi