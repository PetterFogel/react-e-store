import { FC, CSSProperties } from "react";
import { Header } from "./common/components/header/Header";
import MainContent from "./components/Main/MainContent";
import Background from "./assets/main-bg.jpg";

export const App: FC = () => {
  return (
    <>
      <Header />
      <div style={rootStyle}>
        <MainContent />
      </div>
    </>
  );
};

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
  overflowX: "hidden",
};
