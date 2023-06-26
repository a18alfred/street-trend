import styled, {css} from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;

  @media ${({theme}) => theme.media.tablet} {
    margin-top: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${({theme}) => theme.lightGray};
  font-size: 1rem;
  display: inline-flex;
  align-items: center;

  .icon {
    font-size: 1.25rem;
    margin-right: 0.5rem;
    color: ${({theme}) => theme.primaryGolden};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }
`;

const backgroundAndBorder = css`
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1.25rem;
`;

export const LeftColumn = styled.aside`
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: max-content;
  white-space: nowrap;
  ${backgroundAndBorder} @media ${({theme}) => theme.media.tablet} {
    width: 100%;
    align-items: center;
  }
`;

export const UserName = styled.h4`
  color: ${({theme}) => theme.primaryGolden};
`;

export const ContentColumn = styled.main`
  flex: 1;
  overflow: clip;

  h2 {
    margin-top: 0;
  }

  ${backgroundAndBorder}
`;
