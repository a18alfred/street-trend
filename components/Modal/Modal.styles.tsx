import styled from 'styled-components';
import {slideInKeyframes} from '../../theme/reusableCss';

interface ModalOverlayProps {
    positionY: number;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  z-index: 1000;
  position: absolute;
  top: ${({positionY}) => `${positionY}px`};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.secondaryBgLighter};
  backdrop-filter: blur(8px);
  overflow-y: auto;
`;

export const ModalBody = styled.main`
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseModalBtn = styled.button`
  cursor: pointer;
  font-size: 1.45rem;
  background-color: transparent;
  border: 0;

  .icon {
    font-size: 2rem;
    color: ${({theme}) => theme.primaryGolden};
  }
`;

export const Modal = styled.section`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;

  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

export const ModalWrapper = styled.div`
  width: 100%;
`;
