import { FC } from "react";
import { Header } from "./common/components/header/Header";
import { AppRoutes } from "./app-routes/AppRoutes";
import { NotificationAlert } from "./common/components/notification-alert/NotificationAlert";
import "react-toastify/dist/ReactToastify.css";

export const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <NotificationAlert />
    </>
  );
};
