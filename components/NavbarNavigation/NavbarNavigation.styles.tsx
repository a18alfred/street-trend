import styled from 'styled-components';

export const Navigation = styled.nav`
  background: ${({theme}) => theme.secondaryBg};
  border-bottom: 1px solid ${({theme}) => theme.borderGrayColor};
  padding: 1rem 0;

  ul {
    display: flex;
    justify-content: center;
  }

  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;
