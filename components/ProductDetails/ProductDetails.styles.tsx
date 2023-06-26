import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: ${({theme}) => theme.maxWidth};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({theme}) => theme.media.tablet} {
    margin: 2rem 0;
  }
`;

export const TopRow = styled.section`
  height: auto;
  display: flex;
  gap: 1rem;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const RowHalf = styled.div`
  flex: 0.5;
`;
