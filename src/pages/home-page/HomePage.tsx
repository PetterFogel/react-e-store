import { FC } from "react";
import { Typography } from "@mui/material";
import { latestList } from "./helpers/latestList";
import { SectionList } from "../../common/components/section-list/SectionList";
import { homePageStyles } from "./style/homePageStyles";

export const HomePage: FC = () => {
  const classes = homePageStyles();

  return (
    <section>
      <div className={classes.heroSection}></div>
      <Typography variant="h1">
        Welcome to the The Many Saints, quality clothes to match your style
      </Typography>
      <SectionList sectionList={latestList} />
      <div className={classes.heroSection2}>
        <div className={classes.diamond} />
      </div>
    </section>
  );
};
