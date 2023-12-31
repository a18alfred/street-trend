import styled from 'styled-components';

interface StyledProps {
    fontSize: string;
}

export const StyledRouterLink = styled.a<StyledProps>`
  cursor: pointer;
  color: ${({theme}) => theme.primaryWhite};
  font-size: ${({fontSize}) => fontSize};

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }

  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
