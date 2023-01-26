import { FC } from "react";
import { Typography } from "@mui/material";
import { AboutSection } from "./AboutSection";
import { aboutContent } from "../../common/constants/aboutContent";
import { aboutPageStyles } from "./style/aboutPageStyles";

export const AboutPage: FC = () => {
  const classes = aboutPageStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={4}>
        About
      </Typography>
      {aboutContent.map((content) => (
        <AboutSection key={content.id} content={content} />
      ))}
    </div>
  );
};
