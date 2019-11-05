import React from 'react'

const SushiForm = (props) => {

    return (
        <form className="sushi-wallet" onSubmit={props.updateWallet}>
            <p style={{fontSize: 0.75+ "rem"}}>Add to your Sushi Wallet!
                <input type="number" name="money"/>
                <input type="submit" />
            </p>
            
        </form>
    )


}


export default SushiForm