import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;
  gap: 1rem;
  height: 100%;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;

export const ImageList = styled.aside`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

interface StyledProps {
    isHighlighted: boolean;
}

// by clicking on Image we will set its isHighlighted to true, which will in turn add border-color in ImageWrapper
export const ImageWrapper = styled.figure<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid transparent;
  border-color: ${({isHighlighted, theme}) =>
          isHighlighted && theme.secondaryGolden};
  background: ${({theme}) => theme.primaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 0.5rem
`;

export const BigImage = styled.figure`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.primaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;
`;

export const Review = styled.p``;
