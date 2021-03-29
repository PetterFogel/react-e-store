import { Component } from 'react'
import CartItems from './CartItems';
import TimeOut from './TimeOut';
import UserInput from './UserInput';
import '../../style/OrderView.css'
import { UserContext } from '../../contexts/UserContext';

class OrderView extends Component<{}> {
    context!: React.ContextType<typeof UserContext>;
    static contextType = UserContext;

    setShopState = () => {
        this.context.shopStateFalse()
    }
    render() {  
      return(
          <div className="orderView-section">
              <h2 className="title">Orderconfirmation</h2>
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