import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  align-items: center;
  gap: 3rem;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: ${({theme}) => theme.maxWidth};

  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;
