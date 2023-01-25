import { FC } from "react";
import { Typography } from "@mui/material";
import { aboutPageStyles } from "./style/aboutPageStyles";
import contactImage from "../../assets/contact.jpg";
import storeImage from "../../assets/store.jpg";

export const AboutPage: FC = () => {
  const classes = aboutPageStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={4}>
        About
      </Typography>
      <div className={classes.contentRow}>
        <div className={classes.contentImage}>
          <img src={storeImage} className={classes.imageStyle} alt="Contact" />
        </div>
        <div className={classes.contentInfo}>
          <div className={classes.contentHolder}>
            <Typography variant={"h3"} mb={3}>
              Find Us
            </Typography>
            <Typography variant={"h6"}>
              Lorem ipsum dolor sit amet consectetur. Diam turpis cursus sodales
              nisi vitae aliquet vestibulum scelerisque. Fringilla vulputate
              morbi ut justo neque id maecenas. At tincidunt vitae donec nunc
              vel molestie ipsum massa neque. Magnis tortor pulvinar vitae
              vulputate orci id nunc nisi mattis.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.contentRow}>
        <div className={classes.contentImage}>
          <img
            src={contactImage}
            className={classes.imageStyle}
            alt="Contact"
          />
        </div>
        <div className={classes.contentInfo}>
          <div className={classes.contentHolder}>
            <Typography variant={"h3"} mb={3}>
              Store
            </Typography>
            <Typography variant={"h6"}>
              Lorem ipsum dolor sit amet consectetur. Diam turpis cursus sodales
              nisi vitae aliquet vestibulum scelerisque. Fringilla vulputate
              morbi ut justo neque id maecenas. At tincidunt vitae donec nunc
              vel molestie ipsum massa neque. Magnis tortor pulvinar vitae
              vulputate orci id nunc nisi mattis.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
