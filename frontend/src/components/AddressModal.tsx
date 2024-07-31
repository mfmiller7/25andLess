import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddressModalProps } from '../types';
import { ModalStyle } from '../Styles';
import { Geocode } from '../Geocode';
import { Alert } from '@mui/material';

export const AddressModal: React.FC<AddressModalProps> = ({ open, onClose, onAddressSubmit }) => {
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullAddress = `${address}, ${city}, ${state}, ${zip}, ${country}`;
    const coordinates = await Geocode(fullAddress);
    if (coordinates == null) {
      setShowAlert(true);
    } else {
      console.log('Coordinates:', coordinates);
      onAddressSubmit(coordinates);
      handleSkip();
    }
  };

  const handleSkip = () => {
    setShowAlert(false);
    setAddress('');
    setCity('');
    setState('');
    setZip('');
    setCountry('');
    onClose();
  };

  return (
    <Modal open={open} onClose={handleSkip}>
      <Box sx={ModalStyle}>
        <Typography variant="h6" component="h2" gutterBottom>
          Where are you located?
        </Typography>
        <Typography variant="body2" component="h2" gutterBottom>
          This information will not be stored. You may skip this step if you prefer to use the default map position.
        </Typography>
        {showAlert &&
          <Alert severity="error">Please enter a valid address or skip this step.</Alert>
        }
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="ZIP Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="ZIP Code"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            required
            margin="normal"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
          <Button
            variant="text"
            onClick={handleSkip}
            sx={{ mt: 2, ml: 2 }}
          >
            Skip
          </Button>
        </form>
      </Box>
    </Modal>
  );
};