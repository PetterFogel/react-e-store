import PersonalDetails from './PersonalDetails';
import DelivaryDetails from './DelivaryDetails';
import PaymentDetails from './PaymentDetails';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { CSSProperties } from '@material-ui/styles';
import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { UserContext } from '../../../contexts/UserContext';
import { PaymentContext } from '../../../contexts/PaymentContext';

const muiTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        color: "grey",
        "&$active": {
          color: "#56EAC6",
        },
        "&$completed": {
          color: "#56EAC6",
        },
      },
    },
  },
});

  function getSteps(){
    return [ <PersonalDetails/>, <DelivaryDetails/>, <PaymentDetails/>];
  }

  function getStepContent(stepIndex: number){
    switch (stepIndex) {
      case 0: 
        return <PersonalDetails/>;
      case 1: 
        return <DelivaryDetails/>;
      case 2: 
        return <PaymentDetails/>;
      default:
        return 'unknown step'; 
    }
  }
const Accordian = () => {

  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps();
  const value = useContext(UserContext)
  const payment = useContext(PaymentContext)

  const callBackClick = () => {
    nextStep() 
    value.filledState(false)
  }

  const nextStep = () => {
    if(activeStep < 2) {
      setActiveStep((currentStep) => currentStep + 1)
      value.shopStateFalse()
    }
    else if(activeStep < 3){
      value.shopStateTrue()
    }
  }

  const previousStep = () => {
    if(activeStep !== -1)
      setActiveStep((currentStep) => currentStep - 1)
      value.shopStateFalse()
  }

    return (
      <MuiThemeProvider theme={muiTheme}>
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
          {value.isFilled || payment.isFilled ? 
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
            : 
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
          }
        </div>
      </MuiThemeProvider>
    );
}

export default Accordian


