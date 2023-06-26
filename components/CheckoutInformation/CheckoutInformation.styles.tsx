import styled from 'styled-components';

export const Container = styled.section`
  font-size: 0.75rem;

  h3 {
    margin: 2rem 0;
  }
`;

export const UserInformation = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  align-items: center;
  margin: 1rem 0;

  border-radius: ${({theme}) => theme.borderRadius};
  background-color: ${({theme}) => theme.secondaryBg};

  @media ${({theme}) => theme.media.tablet} {
    padding: 1rem;
  }
`;

export const SignOut = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${({theme}) => theme.primaryGolden};
`;

export const UserDetails = styled.p``;
