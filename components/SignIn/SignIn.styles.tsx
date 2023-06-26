import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem;

  h3 {
    margin-bottom: 0;
  }

  @media ${({theme}) => theme.media.phone} {
    gap: 1rem;
  }

  > div {
    margin-bottom: 0.5rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 100%;
  color: ${({theme}) => theme.lightGray};


  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;

export const Footer = styled.footer`
  display: flex;

`;
export const RegistrationBtn = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${({theme}) => theme.primaryGolden};
  margin-left: 5px;
  border: none;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
