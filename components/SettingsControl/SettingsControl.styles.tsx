import styled, {css} from 'styled-components';
import {slideOutKeyframes} from '../../theme/reusableCss';

const isOpenStyle = css`
  visibility: visible;
  opacity: 1;
`;

const isClosedStyle = css`
  visibility: hidden;
  transition: visibility 0.3s,
  opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;
`;

const sharedContainerStyles = css`
  /* Center Icon */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Styles */
  max-width: 4rem;
  padding: 0.5rem;
  background: ${({theme}) => theme.primaryBg};
  border-radius: 2rem;
  border: 2px solid ${({theme}) => theme.secondaryGolden};
  cursor: pointer;
`;

export const Container = styled.aside`
  /* is not shown on mobile devices */
  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }

  /* Positioning */
  position: fixed;
  top: 85%;
  z-index: 6;
  left: calc(100% - 4rem);

  /* Shared Styles */

  ${sharedContainerStyles}
  .icon {
    transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size: 2rem;
    color: ${({theme}) => theme.primaryWhite};
  }

  @media (hover: hover) {
    &:hover {
      .icon {
        transform: rotate(360deg);
      }
    }
  }
`;

export const SettingsContainer = styled.nav<Props>`
  ${({isSettingsShown}) => (isSettingsShown ? isOpenStyle : isClosedStyle)};
  /* positioning */
  position: fixed;
  top: 66%;
  z-index: 7;
  left: calc(100% - 9rem);
  /* display */
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;
  transform: rotateZ(20deg);

  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;

interface Props {
    isSettingsShown: boolean;
}

const slideOutAnimation = css`
  animation: ${slideOutKeyframes} 0.5s ease-in both;
`;
export const SettingsOption = styled.div<Props>`
  /* shared styles */

  ${sharedContainerStyles};
  /* rotation and shape */

  .icon {
    transform: rotateZ(-20deg);
    transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size: 2rem;
    color: ${({theme}) => theme.primaryWhite};

    @media (hover: hover) {
      &:hover {
        color: ${({theme}) => theme.primaryGolden};
      }
    }
  }

  /* appearance animation */
  @keyframes scale-in-ver-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  animation: scale-in-ver-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  /* dis-appearance animation */
  ${({isSettingsShown}) => isSettingsShown === false && slideOutAnimation};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
