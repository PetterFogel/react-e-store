import { CSSProperties } from '@material-ui/styles';
import React, { Component } from 'react'
import CartItems from './CartItems';
import TimeOut from './TimeOut';
import { Guid } from 'js-guid';
import UserInput from './UserInput';

class OrderView extends Component<{}> {

    render() {  
      return(
          <div style={rootStyle}>
              <h2>Orderbekräftelse</h2>
              <h4>OrderNR</h4>
              <h4>{Guid.newGuid().toString()}</h4>
            <TimeOut> 
                <div style={containerStyle}>
                    <CartItems/>
                    <UserInput />
                </div>
            </TimeOut>  
          </div>
        )
    }
}
const rootStyle: CSSProperties = {
    width: '100%',
    height: '90%',  
    background: 'white', 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center'
}

const containerStyle: CSSProperties = {
    width: '100%',
    display: 'flex'
}


export default OrderView;