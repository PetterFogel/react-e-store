import  { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext';
import '../../../../style/Delivery.css'


const Dhl = () => {
    const value = useContext(UserContext)

    const clickCallback = () => {
      value.addDelivery('DHL', 2, 1)
      value.filledState(true)
    }
    return (
      <div onClick={clickCallback}>
            <div className="delivery-div">
              <strong>DHL</strong>
              <span> 1 - 3 Days</span>
            </div>
      </div>
    );
}

export default Dhl