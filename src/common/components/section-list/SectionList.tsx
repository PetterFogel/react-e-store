import { FC } from "react";
import { Typography } from "@mui/material";
import { sectionStyles } from "./style/sectionStyles";
import { SectionItem } from "../../../models/sectionItem";

interface Props {
  sectionList: SectionItem[];
}

export const SectionList: FC<Props> = ({ sectionList }) => {
  const classes = sectionStyles();
  return (
    <section className={classes.section}>
      <div className={classes.latestContainer}>
        {sectionList.map((item) => (
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
  );
};
