import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100%;
  max-width: ${({theme}) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;
`;
