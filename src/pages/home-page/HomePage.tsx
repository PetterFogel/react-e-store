import { FC } from "react";
import { useNavigate } from "react-router";
import { homePageStyles } from "./style/homePageStyles";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { latestList } from "./helpers/latestList";

export const HomePage: FC = () => {
  const classes = homePageStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isBreakpointMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <section className={classes.introContainer}>
        <div className={classes.introHolder}>
          <Typography variant="h1">
            WELCOME TO <br /> THE MANY SAINTS
          </Typography>
          <Typography variant="h2" mt={2} mb={2}>
            Quality clothes to match your style
          </Typography>
          <Button
            onClick={() => navigate("/products")}
            color="info"
            variant="contained"
            size={isBreakpointMd ? "medium" : "large"}>
            Go Shopping
          </Button>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.latestContainer}>
          {latestList.map((item) => (
            <div key={item.id}>
              <img
                alt={item.title}
                src={item.imageUrl}
                className={classes.dummyImage}
              />
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="h5">{item.subtitle}</Typography>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
