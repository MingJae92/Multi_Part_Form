import React from "react";
import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";

const MultiPartForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      make: '',
      model: '',
      colour: '',
    });
    const [formErrors, setFormErrors] = useState({});
  
    const nextStep = () => {
      setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
      };
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return (
            <FormStep1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />
          );
        case 2:
          return (
            <FormStep2
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep} // Pass prevStep function to FormStep3 component
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />
          );
        case 3:
          return (
            <FormStep3
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep} // Pass prevStep function to FormStep3 component
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />
          );
        case 4:
          return <FormStep4 
                formData={formData}
                prevStep={prevStep} // Pass prevStep function to FormStep3 component
                 />;
        default:
          return null;
      }
    };
  
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" sx={{ mt: 4, mb: 2 }}>
          Multi-Part Form
        </Typography>
        {renderStep()}
      </Container>
    );
  };

export default MultiPartForm