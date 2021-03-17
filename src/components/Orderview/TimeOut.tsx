import { CircularProgress, LinearProgress } from '@material-ui/core';
import React, { Component, CSSProperties, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext';

interface Props{

}
interface State {
    hidden: boolean
}

class TimeOut extends Component<{}, State> {
    context!: React.ContextType<typeof CartContext>;
    static contextType = CartContext;
    constructor(props: Props) {
        super(props)
        this.state = {hidden: true}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
            
        }, 3000)
        setTimeout(() => {
            this.context.emptyCart()
        }, 10000)
    }
    render() {
        return this.state.hidden? 
        <div style={rootStyle}>
            <CircularProgress style={loaderStyle}/>
        </div> 
        : 
        this.props.children;
    }
}

const rootStyle: CSSProperties = {
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
}

const loaderStyle: CSSProperties = {
    height: '10rem', 
    width: '10rem'
}
export default TimeOut;


