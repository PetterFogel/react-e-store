import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/CartContext";
import { PaymentContext } from "../../../contexts/PaymentContext";
import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import DelivaryDetails from "./DelivaryDetails";
import PaymentDetails from "./PaymentDetails";

function getSteps() {
  return [<PersonalDetails />, <DelivaryDetails />, <PaymentDetails />];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetails />;
    case 1:
      return <DelivaryDetails />;
    case 2:
      return <PaymentDetails />;
    default:
      return "unknown step";
  }
}
const Accordian = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const value = useContext(UserContext);
  const payment = useContext(PaymentContext);
  const cart = useContext(CartContext);

  const callBackClick = () => {
    nextStep();
    value.filledState(false);
  };

  const nextStep = () => {
    if (activeStep < 2) {
      setActiveStep((currentStep) => currentStep + 1);
      value.shopStateFalse();
    } else if (activeStep < 3) {
      if (cart.cart.length > 0) {
        value.shopStateTrue();
      }
    }
  };

  const previousStep = () => {
    if (activeStep !== -1) setActiveStep((currentStep) => currentStep - 1);
    value.shopStateFalse();
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All Steps are completed</Typography>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button disabled={activeStep === 0} onClick={previousStep}>
          Back
        </Button>
        {value.isFilled || payment.isFilled ? (
          <Button
            style={{
              background: "#56EAC6",
              fontWeight: "bold",
              width: "10rem",
              height: "3rem",
            }}
            variant="contained"
            color="primary"
            onClick={callBackClick}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        ) : (
          <Button
            style={{
              background: "gray",
              fontWeight: "bold",
              width: "10rem",
              height: "3rem",
            }}
            variant="contained"
            color="primary"
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        )}
      </div>
    </>
  );
};

export default Accordian;
