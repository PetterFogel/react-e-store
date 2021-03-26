import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CSSProperties } from "@material-ui/styles";
import Swish from "./PaymentMethods/Swish";
import Creditcard from "./PaymentMethods/Creditcard";
import BankTransfer from "./PaymentMethods/BankTransfer";

const PaymentDetails = () => {
    return (
      <div>
        <Accordion style={form}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Payment Details
          </AccordionSummary>
          <AccordionDetails style={form}>
            <Creditcard />
            <Swish />
            <BankTransfer />
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column", 
  alignItems: "center",
  margin: "1rem 2rem",
  background: "lightgrey",
  fontSize: "1.2rem",
};

export default PaymentDetails