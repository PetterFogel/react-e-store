import { FC } from "react";
import { Link } from "react-router-dom";
import { routeFactory } from "../../constants/routeFactory";
import { errorPanelStyle } from "./style/errorPanelStyle";
import { Alert, Typography } from "@mui/material";

interface Props {
  errorMsg: string;
}

export const ErrorPanel: FC<Props> = ({ errorMsg }) => {
  const classes = errorPanelStyle();
  return (
    <div className={classes.root}>
      <Alert
        variant={"outlined"}
        severity={"error"}
        className={classes.errorPanel}>
        <div className={classes.infoPanel}>
          <Typography variant={"h2"} mb={2}>
            {errorMsg}
          </Typography>
          <Typography variant={"h3"} mb={3}>
            If the problem remains, please contact us!
          </Typography>
          <Link to={routeFactory.homeScreen()}>
            <Typography variant={"h3"} className={classes.link}>
              Back to home
            </Typography>
          </Link>
        </div>
      </Alert>
    </div>
  );
};
