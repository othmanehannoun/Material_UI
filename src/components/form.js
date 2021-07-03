import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Typography, Button} from '@material-ui/core'

//Components Imports
import StepOne from './StepOne'
import StepTho from './StepTho';
import StepThree from './StepThree';



const useStyles = makeStyles({
  root:{
    width: '50%',
    margin: '6rem auto',
    border: "1px solid black ",
    justifyContent:'center',
    textAlign:"center",
    "& .MuiStepIcon-root.MuiStepIcon-completed" :{
      color : "#00e02a"
    }
  }
})

function Form() {

  //React Hooks
  const [activeStep, setActiveStep] = useState(0)
  
  function getSteps(){
    return ["SIGN UP", "CHOOSE PLAN", "CHECKOUT"]
  }
  const steps = getSteps()


  function getStepContent(stepIndex){
    switch(stepIndex){ 
      case 0: 
          return <StepOne />;
      case 1: 
          return <StepTho />;
      case 2: 
          return <StepThree />;

      default: return  "NO STEP"
    }
  }

  const HandelNext = ()=>{
    setActiveStep(presActiveStep => presActiveStep + 1)
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map(label =>(
        <Step key={label}>
          <StepLabel>
           {label}
          </StepLabel>
        </Step>
      ))}

     </Stepper>

     {activeStep === steps.length ? "complited steps" : (

        <>
          {getStepContent(activeStep)}


         <div className="btn">
         <Button onClick={HandelNext}>
              {activeStep === steps.length ? "Finish" : "Next"}
          </Button> 
         </div>
        </>
        )}
     
    </div>
  );
}

export default Form;
