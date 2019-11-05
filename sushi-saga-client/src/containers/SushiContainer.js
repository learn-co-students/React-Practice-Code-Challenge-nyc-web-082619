import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state={
    page: 25
  }

  sushiToRender = (page) => {
       //Pseudo Pagination -- would rather do this in the fetch but forgot how to do query params//
    return this.props.sushis.filter(sushi=>{
      return parseInt((+(sushi.id) - 1)/4) + 1 === page
    })
  }

  updatePage = () => {
    if(this.sushiToRender(this.state.page + 1).length){
    this.setState({
      page: this.state.page + 1
    })}else{
      this.setState({
        page: 1
      })
    }
  }

 renderSushi = () =>{
   return this.sushiToRender(this.state.page).map(sushi=> <Sushi money={this.props.money} eatSushi={this.props.eatSushi} key={sushi.id} {...sushi}/>)

  }
  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi()
          }
          <MoreButton updatePage={this.updatePage}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer