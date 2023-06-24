import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const FormStep3 = ({ formData, setFormData, nextStep }) => {
    const handleChange = (event) => {
      setFormData({ ...formData, colour: event.target.value });
    };
  
    return (
      <Container>
        <Typography variant="h4" component="h2">
          Step 3
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="model-label">Colour</InputLabel>
          <Select
            labelId="model-label"
            id="model"
            value={formData.colour}
            onChange={handleChange}
          >
            <MenuItem value="RED">RED</MenuItem>
            <MenuItem value="BLUE">BLUE</MenuItem>
            <MenuItem value="GREEN">GREEN</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={nextStep}>
          Next
        </Button>
      </Container>
    );
  };

export default FormStep3