import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const FormStep2 = ({ formData, setFormData, nextStep }) => {
    const handleChange = (event) => {
      setFormData({ ...formData, model: event.target.value });
    };
  
    return (
      <Container>
        <Typography variant="h4" component="h2">
          Step 2
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
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
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={nextStep}>
          Next
        </Button>
      </Container>
    );
  };

export default FormStep2