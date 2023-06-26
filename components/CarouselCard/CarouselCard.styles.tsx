import styled, {css} from 'styled-components';

export const Container = styled.article`
  position: relative;
  min-width: 400px;
  aspect-ratio: 1/1;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  padding: 2rem 1.25rem;
  border-radius: ${({theme}) => theme.borderRadius};
  background-color: ${({theme}) => theme.secondaryBg};
  transition: all 0.3s ease-in-out;

  @media (hover: hover) {
    :hover {
      background-color: ${({theme}) => theme.secondaryBgLightest};
    }
  }
`;
export const Figcaption = styled.figcaption`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`;

export const A = styled.a`
  text-transform: capitalize;
  color: ${({theme}) => theme.primaryWhite};

  :focus-visible {
    outline: none;
    box-shadow: none;
  }

  :focus-visible::before {
    box-shadow: 0 0 0 3px ${({theme}) => theme.secondaryGolden};
    border-radius: ${({theme}) => theme.borderRadius};
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
export const Title = styled.h4`
  font-weight: 400;
  text-transform: capitalize;
  color: ${({theme}) => theme.lightGray};
`;
export const Price = styled.p`
  font-weight: 600;
  color: ${({theme}) => theme.primaryGolden};
`;

export const BrandBadge = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 1rem;

  ${({theme}) => theme.mode === 'light' && css`
    filter: invert(100%);
  `}
`;