import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi, index) => {
            if (props.sushiIndex < index && index < props.sushiIndex + 5) {
              return <Sushi
                id={sushi.id}
                name={sushi.name} 
                image={sushi.img_url}
                price={sushi.price}
                handleEatenSushi={props.handleEatenSushi}
                eatenSushi={props.eatenSushi}
                key={sushi.id}
              />
            }  
            return null
          })
        }
        <MoreButton handleSushiIndex={props.handleSushiIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer