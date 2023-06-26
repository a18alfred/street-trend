import styled from 'styled-components';

export const CardContainer = styled.article`
  position: relative;
  display: flex;
  padding: 1rem;
  background-color: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  gap: 1rem;

  @media (hover: hover) {
    :hover {
      background-color: ${({theme}) => theme.secondaryBgLightest};
    }
  }
`;

export const CardImage = styled.figure`
  flex: 0.3;
  align-self: flex-end;
`;

export const CardText = styled.aside`
  flex: 0.7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;

  .router-link {
    max-width: 70%;
  }
`;
export const Price = styled.p`
  color: ${({theme}) => theme.primaryGolden};
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const A = styled.a`
  cursor: pointer;
  color: ${({theme}) => theme.primaryWhite};

  :focus-visible {
    outline: none;
    box-shadow: none;
  }

  :focus-visible::before {
    box-shadow: 0 0 0 3px ${({theme}) => theme.secondaryGolden};
    border-radius: ${({theme}) => theme.borderRadius};
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
