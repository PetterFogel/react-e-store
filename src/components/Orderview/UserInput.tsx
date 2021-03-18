import React, { Component } from 'react'
import { UserContext } from '../../contexts/UserContext'
import '../../style/cartItems.css'

class UserInput extends Component {
    context!: React.ContextType<typeof UserContext>
    static contextType = UserContext;

    render() {
        return(
            <div className="orderView-container">
                <div className="order-div">
                    <h3>{this.context.user.name}</h3>
                    <h5>{this.context.user.adress}</h5>
                    <h5>{this.context.user.email}</h5>
                    <h5>{this.context.user.phone}</h5>
                </div>

            </div>
        )
    }

}

export default UserInput;