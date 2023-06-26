import styled from 'styled-components';

export const HeaderLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  user-select: none;

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`
export const Street = styled.a`
  font-size: 1.75rem;
  color: ${({theme}) => theme.primaryWhite};
  text-transform: uppercase;
  margin-left: 1rem;

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
export const Trend = styled.span`
  font-size: 1.75rem;
  color: ${({theme}) => theme.primaryGolden};
  text-transform: uppercase;
`;
