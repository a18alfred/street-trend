import styled, {css} from 'styled-components';

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: margin-top 1s ease-in;

  height: max-content;
  min-height: 100vh;
  line-height: 1;
  perspective: 1000px;

  margin-top: -137px;

  @media ${({theme}) => theme.media.tablet} {
    margin-top: -100px;
  }

  @media (max-height: 610px) {
    margin-top: 0px;
  }
`;

export const ImageWrap = styled.figure`
  width: 100%;
  max-width: 85vw;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  cursor: pointer;

  margin: 0 auto;

  .hero-image {
    display: block;

  }

  /**
 * ----------------------------------------
 * animation puff-in-center
 * ----------------------------------------
 */
  @keyframes puff-in-center {
    0% {
      transform: scale(1.2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }

  animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;

export const Figcaption = styled.figcaption`
  text-align: center;
  margin-bottom: 1rem;

  @media ${({theme}) => theme.media.phone} {
    margin-bottom: 3rem;
  }
`;

const headerStyles = css`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 900;
  transition: all 0.75s ease-out;
`;

interface HeaderProps {
    sneakerLogoGradient: string;
}

export const Header = styled.h1<HeaderProps>`
  ${headerStyles};
  font-weight: 700;
  background-image: ${({sneakerLogoGradient}) => sneakerLogoGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${({theme}) => theme.media.phone} {
    font-size: 1.75rem;
  }
`;

export const SubHeader = styled.h1<HeaderProps>`
  ${headerStyles};
  font-size: 5rem;
  letter-spacing: 1px;

  background-image: ${({sneakerLogoGradient}) => sneakerLogoGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${({theme}) => theme.media.phone} {
    font-size: 2.75rem;
  }
`;

const buttonStyle = css`
  position: absolute;
  top: 50%;
  background: transparent;
  border: 0;
  cursor: pointer;

  .icon {
    transition: all 0.3s ease-in-out;
    font-size: 4rem;
    color: ${({theme}) => theme.primaryGolden};
  }

  @media ${({theme}) => theme.media.phone} {
    .icon {
      font-size: 2.5rem;
    }
  }
`;

export const NextSneaker = styled.button`
  ${buttonStyle};
  right: 10rem;

  @media (hover: hover) {
    &:hover {
      .icon {
        transform: translateX(4px);
      }
    }
  }

  @media ${({theme}) => theme.media.tablet} {
    right: 1rem;
  }
`;
export const PrevSneaker = styled.button`
  ${buttonStyle};
  left: 10rem;

  @media (hover: hover) {
    &:hover {
      .icon {
        transform: translateX(-4px);
      }
    }
  }

  @media ${({theme}) => theme.media.tablet} {
    left: 1rem;
  }
`;
