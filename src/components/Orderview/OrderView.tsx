import { Component } from 'react'
import CartItems from './CartItems';
import TimeOut from './TimeOut';
import UserInput from './UserInput';
import '../../style/OrderView.css'

class OrderView extends Component<{}> {

    render() {  
      return(
          <div className="orderView-section">
              <h2>Orderconfirmation</h2>
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