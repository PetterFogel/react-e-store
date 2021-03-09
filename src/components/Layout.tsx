import { url } from 'node:inspector';
import React, { CSSProperties } from 'react';
import MainContent from './Main/MainContent';
import Navbar from './Navbar';
import Background from '../assets/main-bg.jpg';

function Layout() {
    return (
        <div style={rootStyle}>
            <Navbar />
            <MainContent/>
        </div>
    );
}

const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${Background})`,
    objectFit: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
}

export default Layout;