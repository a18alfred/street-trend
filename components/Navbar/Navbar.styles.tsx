import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 6rem;
  background: ${({theme}) => theme.primaryBg};

  @media ${({theme}) => theme.media.tablet} {
    height: auto;
  }
`;

export const Spacer = styled.div`
  margin-top: 137px;

  @media ${({theme}) => theme.media.tablet} {
    margin-top: 59px;
  }
`;
