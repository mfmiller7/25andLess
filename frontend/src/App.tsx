import { Button } from '@mui/material';
import { AddressModal } from './components/AddressModal';
import { Map } from './components/Map';
import { StyledDiv } from './styles';
import { useState } from 'react';
import { usePositionStore } from './usePositionStore';

export default function App() {
  
  const isDefault = usePositionStore((state) => state.default);
  const [modalOpen, setModalOpen] = useState<boolean>(isDefault);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledDiv>
      <AddressModal
        open={modalOpen}
        onClose={handleModalClose}
      />
      <Button
        variant="text"
        onClick={() => setModalOpen(true)}
      >
        Enter your location
      </Button>
      <Map />
    </StyledDiv>
  );
}