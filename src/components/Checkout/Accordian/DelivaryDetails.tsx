import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CSSProperties } from "@material-ui/styles";
import PostNord from "./DeliveryDetails/PostNord";
import Dhl from "./DeliveryDetails/Dhl";
import Bring from "./DeliveryDetails/Bring";

const DelivaryDetails = () => {
    return (
      <div>
        <Accordion style={form}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Delivery Details
          </AccordionSummary>
          <AccordionDetails style={{display: 'flex', flexDirection: 'column'}}>
            <PostNord/>
            <Bring />
            <Dhl/>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem 2rem",
  background: "lightgrey",
  fontSize: "1.2rem",

};
export default DelivaryDetails