import styled from 'styled-components';

export const Container = styled.section`
  overflow: clip;
`;

export const Wrap = styled.section`
  margin: 3rem 0 5rem 0;
  display: flex;
  gap: 1rem;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column;
    margin-top: 0.25rem;
  }
`;

export const GridWrap = styled.main`
  width: 100%;
`;
