import React, { Fragment } from 'react'


const Sushi = (props) => {

  function handleEatenSushiCallback(){
    props.handleEatenSushi(props.price, props.id)
  }

  return (
    <Fragment >
        <div className="sushi" onClick={handleEatenSushiCallback} >
        <div className="plate" >
          {props.eatenSushi.includes(props.id) ? null : <img src={props.image} width="100%" alt="sushi" />}
        </div>
        <h4 className="sushi-details">
          {props.name} - ${props.price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi



