import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  height: 100%;

  @media (hover: hover) {
    :hover {
      background-color: ${({theme}) => theme.secondaryBgLightest};
    }
  }

  @media ${({theme}) => theme.media.phone} {
    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const CardImage = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.p`
  color: ${({theme}) => theme.primaryGolden};
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
