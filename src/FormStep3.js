import React from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography, FormHelperText } from '@mui/material';

const FormStep3 = ({ formData, setFormData, nextStep, prevStep, formErrors, setFormErrors }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, colour: event.target.value });
  };

  const handleNext = () => {
    // Perform form validation
    if (!formData.colour) {
      // Set the validation error for 'colour' field
      setFormErrors({ ...formErrors, colour: 'Colour is required' });
    } else {
      // Proceed to the next step
      nextStep();
    }
  };

  const handleBack = () => {
    // Go back to the previous step
    prevStep();
  };

  return (
    <Container maxWidth="sm">
      {/* Step 3 */}
      <Typography variant="h4" component="h2" style={{ marginBottom: '2rem' }}>
        Step 3
      </Typography>
      <FormControl fullWidth style={{ marginBottom: '2rem' }} error={Boolean(formErrors.colour)}>
        <InputLabel id="colour-label">Colour</InputLabel>
        <Select labelId="colour-label" id="colour" value={formData.colour} onChange={handleChange}>
          <MenuItem value="RED">RED</MenuItem>
          <MenuItem value="BLUE">BLUE</MenuItem>
          <MenuItem value="GREEN">GREEN</MenuItem>
        </Select>
        {formErrors.colour && <FormHelperText>{formErrors.colour}</FormHelperText>}
      </FormControl>
      <Button variant="contained" style={{ marginRight: '1rem' }} onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
};

export default FormStep3;
