import { FC } from "react";
import { Typography } from "@mui/material";
import { Content } from "../../models/content";
import { aboutPageStyles } from "./style/aboutPageStyles";

interface Props {
  content: Content;
}

export const AboutSection: FC<Props> = ({ content }) => {
  const classes = aboutPageStyles();
  return (
    <div className={classes.contentRow}>
      <div className={classes.contentImage}>
        <img
          src={content.imgUrl}
          className={classes.imageStyle}
          alt={content.imgUrl}
        />
      </div>
      <div className={classes.contentInfo}>
        <div className={classes.contentHolder}>
          <Typography variant={"h3"} mb={3}>
            {content.title}
          </Typography>
          <Typography variant={"h6"}>{content.paragraph}</Typography>
        </div>
      </div>
    </div>
  );
};
