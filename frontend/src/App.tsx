import { Button } from '@mui/material';
import { AddressModal } from './components/AddressModal';
import { Map } from './components/Map';
import { StyledDiv } from './Styles';
import { useState } from 'react';

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [userPosition, setUserPosition] = useState<any>([42.3467, -71.0972]);
  const [isDefault, setIsDefault] = useState<boolean>(true);

  const handleAddressSubmit = async (coordinates: any) => {
    setUserPosition(coordinates);
    setIsDefault(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledDiv>
      <AddressModal
        open={modalOpen}
        onClose={handleModalClose}
        onAddressSubmit={handleAddressSubmit}
      />
      <Button
        variant="text"
        onClick={() => setModalOpen(true)}
      >
        Enter your location
      </Button>
      <Map position={userPosition} isDefault={isDefault} />
    </StyledDiv>
  );
}