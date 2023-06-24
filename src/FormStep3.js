import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography, FormHelperText } from '@mui/material';

const FormStep3 = ({ formData, setFormData, nextStep, formErrors, setFormErrors }) => {
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
  
    return (
      <Container>
        {/* Step 3 */}
        <Typography variant="h4" component="h2">
          Step 3
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }} error={Boolean(formErrors.colour)}>
          <InputLabel id="colour-label">Colour</InputLabel>
          <Select
            labelId="colour-label"
            id="colour"
            value={formData.colour}
            onChange={handleChange}
          >
            <MenuItem value="RED">RED</MenuItem>
            <MenuItem value="BLUE">BLUE</MenuItem>
            <MenuItem value="GREEN">GREEN</MenuItem>
          </Select>
          {formErrors.colour && <FormHelperText>{formErrors.colour}</FormHelperText>}
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleNext}>
          Next
        </Button>
      </Container>
    );
  };
export default FormStep3