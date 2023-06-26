import styled, {css} from 'styled-components';

export const Container = styled.section`
@media${({theme}) => theme.media.desktop} {
  display: none;
} @media${({theme}) => theme.media.tablet} {
  display: block;
}
`;

export const UL = styled.ul`
  /* This container is horizontally scrollable */
  /* Component in which it will be injected should have overflow:hidden/clip to prevent overflow */
  display: grid;
  grid-auto-flow: column;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  justify-content: flex-start;

  gap: 1rem;
  height: auto;

  /* Hide horizontal scrollbar on mobile devices */

  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LI = styled.li`
`;

export const BrandLogo = styled.a`
  width: 150px;
  border-radius: ${({theme}) => theme.borderRadius};
  background-color: ${({theme}) => theme.secondaryBg};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    ${({theme}) =>
            theme.mode === 'light' && css`
              filter: invert(100%);
            `}
  }

`;
