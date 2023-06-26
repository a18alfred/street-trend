import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme}) => theme.primaryWhite};
  font-size: 1rem;
  font-weight: 600;
  gap: 0.75rem;

  p {
    white-space: nowrap;
  }

  @media ${({theme}) => theme.media.phone} {
    gap: 0.5rem;
    font-size: 0.75rem;
  }
`;
export const SignIn = styled.span`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;

export const ModalContentWrapper = styled.div``;
