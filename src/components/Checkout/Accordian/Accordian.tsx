import PersonalDetails from './PersonalDetails';
import DelivaryDetails from './DelivaryDetails';
import PaymentDetails from './PaymentDetails';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { CSSProperties } from '@material-ui/styles';

const Accordian = () => {

  const [activeStep, setActiveStep] = React.useState(0)

  const nextStep = () => {
    if(activeStep < 2)
        setActiveStep((currentStep) => currentStep + 1)
  }

  const previousStep = () => {
    if(activeStep !== -1)
      setActiveStep((currentStep) => currentStep - 1)
  }

    return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>
              <PersonalDetails />
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <DelivaryDetails />
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <PaymentDetails />
            </StepLabel>
          </Step>
        </Stepper>
        
          <Button onClick={() => nextStep()} variant="outlined">
            Next Step
          </Button>
          <Button onClick={() => previousStep()} variant="outlined">
            Previous Step
          </Button>

      </div>
    );
}

export default Accordian


