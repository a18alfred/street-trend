import styled from 'styled-components';

export const Container = styled.section`
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const PaymentMethod = styled.button`
  cursor: pointer;
  height: 3rem;
  overflow: clip;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  background-color: ${({theme}) => theme.primaryGolden};
  border: none;
  color: ${({theme}) => theme.primaryGolden};
  border-radius: ${({theme}) => theme.borderRadius};

  @media (hover: hover) {
    &:hover {
      background-color: ${({theme}) => theme.secondaryGolden};
    }
  }

  @media ${({theme}) => theme.media.tablet} {
    width: 100%;
    margin: 0;
  }
`;
