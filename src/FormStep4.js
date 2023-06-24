import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const FormStep4 = ({ formData, prevStep }) => {
  const handlePrevStep = () => {
    prevStep();
  };

  return (
    <Container maxWidth="sm">
      {/* Step 4 */}
      <Typography variant="h4" component="h2" sx={{ marginBottom: '2rem' }}>
        Step 4
      </Typography>

      {formData.colour === 'RED' ? (
        <Typography variant="body1" sx={{ marginTop: '2rem' }}>
          THE CAR IS {formData.colour} NICE!!
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ marginTop: '2rem' }}>
          I have a {formData.make} and the colour is {formData.colour}
        </Typography>
      )}

      <Button variant="contained" color="primary" onClick={handlePrevStep}>
        Previous
      </Button>
    </Container>
  );
};

export default FormStep4;
