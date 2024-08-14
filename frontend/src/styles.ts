import styled from "styled-components";

export const StyledDiv = styled.div`
`;

export const PopupHeader = styled.h2`
  font-weight: bold;
`;

export const PopupAddress = styled.h3`
  font-weight: bold;
`;

export const ScrollView = styled.div`
  overflow-y: auto;
`;

export const ModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};