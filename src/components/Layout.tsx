
import { CSSProperties } from 'react';
import MainContent from './Main/MainContent';
import Navbar from './Navbar';
import Background from '../assets/main-bg.jpg';

function Layout() {
    return (
      <>
        <Navbar />
        <div style={rootStyle}>
          <MainContent/>
        </div>
      </>
    );
}

const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    maxHeight: "100vh",
    overflow: "scroll",
    overflowX: "hidden"
}

export default Layout;