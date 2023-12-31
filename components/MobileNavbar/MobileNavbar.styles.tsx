import styled from 'styled-components';
import {slideInKeyframes} from '../../theme/reusableCss';

export const Container = styled.header`
  display: none;
  /* will not show up on PC and Tablet widths */
  /* will be in DOM only on mobile widths */
  @media ${({theme}) => theme.media.tablet} {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${({theme}) => theme.borderGrayColor};

    .mobile-icon {
      display: block;
      font-size: 1.75rem;
      cursor: pointer;
    }
  }
`;

interface Props {
    height: string;
}

export const SearchContainer = styled.div<Props>`
  padding: 1rem;
  border-bottom: 1px solid ${({theme}) => theme.borderGrayColor};
  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  height: ${({height}) => height};

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

`;

export const RightControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ThemeControl = styled.div`
  font-size: 1.5rem;
  margin: 1rem 2rem;
  cursor: pointer;
  color: ${({theme}) => theme.lightGray};

  @media (hover: hover) {
    :hover {
      color: ${({theme}) => theme.primaryWhite};
    }
  }
`
