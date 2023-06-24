import React from 'react';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, FormHelperText, createTheme, ThemeProvider } from '@mui/material';

// Define the custom theme
const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', // Set your desired background color here
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ padding: '2rem', margin: '2rem' }}>
        {/* Step 1 */}
        <Typography variant="h4" component="h2" style={{ marginBottom: '2rem' }}>
          Step 1
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth error={Boolean(formErrors.make)}>
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
          </Grid>
          {/* Add additional form fields here */}
        </Grid>
        <Grid container justifyContent="flex-end" style={{ marginTop: '2rem' }}>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default FormStep1;
