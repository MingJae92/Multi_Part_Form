import React from 'react'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const FormStep4 = ({ formData }) => {
    return (
      <Container>
        {/* Step 4 */}
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
export default FormStep4