
import { Component } from 'react'
import CartItems from './CartItems';
import TimeOut from './TimeOut';
import { Guid } from 'js-guid';
import UserInput from './UserInput';
import '../../style/OrderView.css'

class OrderView extends Component<{}> {

    render() {  
      return(
          <div className="orderView-section">
              <h2>Orderbekräftelse</h2>
              <h4>OrderNR</h4>
              <h4>{Guid.newGuid().toString()}</h4>
            <TimeOut> 
                <div className="input-section">
                    <CartItems/>
                    <UserInput />
                </div>
            </TimeOut>  
          </div>
        )
    }
}
export default OrderView;