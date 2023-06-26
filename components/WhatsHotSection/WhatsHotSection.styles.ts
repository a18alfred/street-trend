import styled from 'styled-components';

export const Wrapper = styled.section`
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1rem;
  row-gap: 1rem;
  overflow: hidden;
`;
