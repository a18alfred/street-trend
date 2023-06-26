import styled, {css} from 'styled-components';

export const CreditCard = styled.article`
  z-index: 1;
  width: 100%;
  perspective: 150rem;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  height: 20rem;
  max-width: 550px;
  box-shadow: none;
  background: none;
  display: flex;


  :hover .front,
  :active .front {
    transform: rotateY(180deg);
  }

  :hover .back,
  :active .back {
    transform: rotateY(0deg);
  }

  @media ${({theme}) => theme.media.tablet} {
    height: 15rem;
    max-width: 550px;
  }
`;

const sideCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 15rem;
  border-radius: ${({theme}) => theme.borderRadius};
  transition: all 0.8s ease;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  padding: 1rem 2rem;
  color: white;

  @media ${({theme}) => theme.media.tablet} {
    height: 12rem;
    width: 100%;
    padding: 1rem 0.5rem;
  }
`;
export const BackSide = styled.div`
  ${sideCss};
  transform: rotateY(-180deg);
  box-shadow: ${({theme}) => theme.boxShadowLg};
  background-color: ${({theme}) => theme.primaryBg};

  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media ${({theme}) => theme.media.tablet} {
    gap: 0.5rem;
  }
`;

export const FrontSide = styled.div`
  ${sideCss};

  box-shadow: ${({theme}) => theme.boxShadowLg};
  background-color: ${({theme}) => theme.primaryBg};
`;

export const Chip = styled.figure`
  display: flex;
  align-items: center;

  img {
    display: inline-flex;
  }
`;

export const Name = styled.h3`
  margin-left: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  color: ${({theme}) => theme.primaryGolden};

  @media ${({theme}) => theme.media.tablet} {
    font-size: 0.75rem;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .icon {
    color: ${({theme}) => theme.secondaryGolden};
    font-size: 2.5rem;
  }

  @media ${({theme}) => theme.media.tablet} {
    .icon {
      font-size: 1.25rem;
    }
  }
`;

export const ChipWrapper = styled.div`
  display: flex;

  justify-content: flex-start;
  width: 100%;
  text-transform: uppercase;
  font-size: 1.5rem;
  align-items: center;
`;
export const StreetTrend = styled.h3`
  color: ${({theme}) => theme.primaryWhite};
  /* text-shadow: 0 0 2px #1b1b1b; */

  @media ${({theme}) => theme.media.tablet} {
    font-size: 1rem;
  }
`;

export const ProviderName = styled.p`
  font-size: 1.25rem;
  color: ${({theme}) => theme.primaryGolden};
  margin-left: 1rem;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 1rem;
  }
`;

export const CardNumber = styled.p`
  /* text-shadow: 0 0 1px white; */
  letter-spacing: 6px;
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 900;
  color: ${({theme}) => theme.primaryWhite};
  @media ${({theme}) => theme.media.tablet} {
    letter-spacing: 3px;
    font-size: 1rem;
  }
`;

export const CustomerAvatar = styled.figure``;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CustomerSupport = styled.p<{ secondary?: boolean }>`
  color: ${({theme, secondary}) => secondary ? theme.lightGray : theme.primaryGolden};
  margin-bottom: 0.5rem;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 0.75rem;
  }
`;
export const Telephone = styled.a`
  display: block;
  cursor: pointer;
  margin-bottom: 0.25rem;
  color: ${({theme}) => theme.primaryWhite};
  @media ${({theme}) => theme.media.tablet} {
    font-size: 0.75rem;
  }
`;
