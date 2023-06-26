import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.borderGrayColor};
  font-size: 0.75rem;
  padding: 0 0.5rem;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;
export const Figure = styled.figure`
  width: 60px;
  height: auto;

  img {
    display: block;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;
export const RightColumn = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media ${({theme}) => theme.media.tablet} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Wrap = styled.div`
  vertical-align: center;

  a {
    font-size: 0.75rem;
  }
`;

export const SizeWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const Price = styled.p`
  font-weight: 600;
  color: ${({theme}) => theme.primaryGolden};
`;

interface Props {
    btnType: 'add' | 'remove';
}

export const ControlButton = styled.button<Props>`
  cursor: pointer;
  font-size: 0.75rem;
  background: transparent;
  border: none;
  white-space: nowrap;
  width: max-content !important;
  color: ${({theme, btnType}) =>
          btnType === 'add' ? theme.activeGreen : theme.lightGray};

  @media (hover: hover) {
    &:hover {
      color: ${({theme, btnType}) =>
              btnType === 'add' ? theme.primaryGolden : theme.primaryRed};
    }
  }
`;
