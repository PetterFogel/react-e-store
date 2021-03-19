import  { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext';
import '../../../../style/Delivery.css'


const PostNord = () => {

    const value = useContext(UserContext)
    return (
      <div onClick={() => value.addDelivery('Postnord', 3, 1)}>
            <div className="delivery-div">
              <strong>Postnord</strong>
              <span> 2 - 3 Days</span>
            </div>
      </div>
    );
}

export default PostNord