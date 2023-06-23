import React, { useState } from 'react';
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

const FormStep4 = ({ formData }) => {
  return (
    <Container>
      <Typography variant="h4" component="h2">
        Step 4
      </Typography>


      {formData.colour === 'RED' ? (
        <Typography variant="body1" sx={{ mt: 2 }}>
          THE CAR IS {formData.colour} NICE!!
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          I have a {formData.make} and the colour is {formData.colour}
        </Typography>
      )}
    </Container>
  );
};

const MultiPartForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    colour:''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <FormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <FormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 3:
        return <FormStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 4: 
        return <FormStep4 formData={formData}/>;
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

export default MultiPartForm;



