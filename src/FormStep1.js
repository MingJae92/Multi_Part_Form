import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const FormStep1 = ({ formData, setFormData, nextStep }) => {
    const handleChange = (event) => {
      setFormData({ ...formData, make: event.target.value });
    };
  
    return (
      <Container>
        <Typography variant="h4" component="h2">
          Step 1
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
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
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={nextStep}>
          Next
        </Button>
      </Container>
    );
  };
export default FormStep1
