import { FC } from "react";
import { Header } from "./common/components/header/Header";
import { Routes } from "./routes/Routes";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};
