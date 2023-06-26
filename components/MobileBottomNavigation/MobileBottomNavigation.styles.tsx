import styled from 'styled-components';

export const Container = styled.nav<{ padding: string, height: string }>`
  /* will not be shown on desctop screens */
  display: none;

  @media ${({theme}) => theme.media.tablet} {
    display: flex;
    height: ${({height}) => height};
    position: fixed;
    bottom: 0;
    left: 0;
    padding: ${({padding}) => padding};
    z-index: 60;
    width: 100vw;

    background: ${({theme}) => theme.secondaryBgLighter};
    backdrop-filter: blur(8px);
    border: 1px solid ${({theme}) => theme.borderGrayColor};
  }
`;

export const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LI = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const LinkWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({theme, isActive}) => isActive ? theme.primaryWhite : theme.lightGray};
`;

export const Icon = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 1.75rem;
  }
`;

export const IconText = styled.p`
  font-size: 0.5rem;
  text-transform: capitalize;
`;
