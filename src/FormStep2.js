import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography, FormHelperText } from '@mui/material';

const FormStep2 = ({ formData, setFormData, nextStep, formErrors, setFormErrors }) => {
    const handleChange = (event) => {
      setFormData({ ...formData, model: event.target.value });
    };
  
    const handleNext = () => {
      // Perform form validation
      if (!formData.model) {
        // Set the validation error for 'model' field
        setFormErrors({ ...formErrors, model: 'Model is required' });
      } else {
        // Proceed to the next step
        nextStep();
      }
    };
  
    return (
      <Container>
        {/* Step 2 */}
        <Typography variant="h4" component="h2">
          Step 2
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }} error={Boolean(formErrors.model)}>
          <InputLabel id="model-label">Model</InputLabel>
          <Select
            labelId="model-label"
            id="model"
            value={formData.model}
            onChange={handleChange}
          >
            <MenuItem value="a3">A3</MenuItem>
            <MenuItem value="x5">X5</MenuItem>
            <MenuItem value="c-class">C-Class</MenuItem>
          </Select>
          {formErrors.model && <FormHelperText>{formErrors.model}</FormHelperText>}
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleNext}>
          Next
        </Button>
      </Container>
    );
  };

export default FormStep2