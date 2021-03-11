import React, { Component, CSSProperties } from 'react';
import Login from './Login';

interface Props {
    shouldClose: () => void;
}

class Modal extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div style={modalStyle}>
                <Login/>
            </div>
        );
    }
}

const modalStyle: CSSProperties = {
    position: "fixed",
    zIndex: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.7)"
}

export default Modal;