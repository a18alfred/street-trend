import styled from 'styled-components';

export const CardContainer = styled.article`
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;

`;
export const Description = styled.p`
  color: ${({theme}) => theme.lightGray};
`;
