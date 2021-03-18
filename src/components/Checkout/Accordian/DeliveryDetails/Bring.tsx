import  { useContext } from 'react'
import { CSSProperties } from "@material-ui/styles";
import { UserContext } from '../../../../contexts/UserContext';
import '../../../../style/Delivery.css'


const Bring = () => {

    const value = useContext(UserContext)
    return (
      <div onClick={() => value.addDelivery('Bring', 5, 3)}>
            <div className="delivery-div">
              <strong>Bring</strong>
              <span> 3 - 5 Days</span>
            </div>
      </div>
    );
}

export default Bring