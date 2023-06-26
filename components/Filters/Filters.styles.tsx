import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 270px;
  max-width: 270px;
  min-width: 270px;
  height: max-content;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
  overflow: hidden;
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  @media ${({theme}) => theme.media.tablet} {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
  user-select: none;
`;

export const ClearFilters = styled.button`
  cursor: pointer;
  background: transparent;
  border: 2px solid ${({theme}) => theme.borderGrayColor};
  border-radius: ${({theme}) => theme.borderRadius};
  color: ${({theme}) => theme.primaryWhite};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0rem;
  text-transform: uppercase;
  font-weight: 700;

  @media (hover: hover) {
    &:hover {
      background-color: ${({theme}) => theme.primaryGolden};
      border: 2px solid ${({theme}) => theme.primaryGolden};
    }
  }
`;
