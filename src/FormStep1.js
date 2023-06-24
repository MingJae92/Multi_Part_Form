import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography, FormHelperText } from '@mui/material';

const FormStep1 = ({ formData, setFormData, nextStep, formErrors, setFormErrors }) => {
    const handleChange = (event) => {
      setFormData({ ...formData, make: event.target.value });
    };
  
    const handleNext = () => {
      // Perform form validation
      if (!formData.make) {
        // Set the validation error for 'make' field
        setFormErrors({ ...formErrors, make: 'Make is required' });
      } else {
        // Proceed to the next step
        nextStep();
      }
    };
  
    return (
      <Container>
        {/* Step 1 */}
        <Typography variant="h4" component="h2">
          Step 1
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }} error={Boolean(formErrors.make)}>
          <InputLabel id="make-label">Make</InputLabel>
          <Select
            labelId="make-label"
            id="make"
            value={formData.make}
            onChange={handleChange}
          >
            <MenuItem value="audi">Audi</MenuItem>
            <MenuItem value="bmw">BMW</MenuItem>
            <MenuItem value="mercedes">Mercedes</MenuItem>
          </Select>
          {formErrors.make && <FormHelperText>{formErrors.make}</FormHelperText>}
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleNext}>
          Next
        </Button>
      </Container>
    );
  };
export default FormStep1
