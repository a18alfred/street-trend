import styled from 'styled-components';

export const LayoutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 8fr;
  min-height: 100vh;
`;

export const ChildrenWrapper = styled.main`
  padding: 1rem;
  background-color: ${({theme}) => theme.primaryBg};
`;
