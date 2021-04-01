import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../style/cartItems.css";
import { Guid } from 'js-guid';
import { CartContext } from "../../contexts/CartContext";
import { PaymentContext } from "../../contexts/PaymentContext";



const UserInput = () =>{
  const user = useContext(UserContext)
  const cart = useContext(CartContext)
  const payment = useContext(PaymentContext)
  console.log(user.user)
  console.log(payment.bankCard)
  console.log(payment.bankPayment)
  console.log(payment.swishNumber)
    return (
      <div>
        <div className="orderView-container">
          <div className="orderlisting-div1">
            <div className="order-listings">
              <h5>Name:</h5>
              <p>{user.user.name}</p>
            </div>
            <div className="order-listings">
              <h5>Emailadress:</h5>
              <p>{user.user.email}</p>
            </div>
            <div className="order-listings">
              <h5>Phonenumber:</h5>
              <p>{user.user.phone}</p>
            </div>
            <div className="order-listings">
              <h5>Adress:</h5>
              <p>{user.user.adress}</p>
            </div>
          </div>

          <div className="orderlisting-div2">
            <div className="order-listings">
              <h5>Zip-Code:</h5>
              <p>{user.user.zip}</p>
            </div>
            <div className="order-listings">
              <h5>Shipping:</h5>
              <p>{user.delivery.company}</p>
            </div>
            <div className="order-listings">
              <h5>Date of delivery: </h5>
              <p>{user.delivery.date}</p>
            </div>
            <div className="order-listings">
              <h5>OrderNr:</h5>
              <p>{Guid.newGuid().toString()}</p>
            </div>
          </div>
        </div>
        <div className="total-price">
          <h5>Total price</h5>
          {`${user.shippingPriceState + cart.orderAmount} SEK`}
        </div>
      </div>
    );
}

export default UserInput;
