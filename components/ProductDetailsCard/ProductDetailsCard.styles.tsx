import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;
  text-transform: capitalize;

  h2 {
    margin: 0;
  }

  button {
    width: 50%;
  }

  @media ${({theme}) => theme.media.tablet} {
    button {
      width: 100%;
    }
  }
`;

export const StarsRating = styled.div`
  display: flex;
  align-items: center;
`;

export const NumberOfReviews = styled.p`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Price = styled.h4`
  color: ${({theme}) => theme.secondaryGolden};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  margin-bottom: 1rem;
  color: ${({theme}) => theme.lightGray};

  li {
    white-space: normal;
    margin-left: 1rem;
    list-style: circle;
    text-transform: capitalize;

    span {
      margin-right: 0.5rem;
    }
  }
`;

export const SizesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  gap: 0.5rem;
`;

interface Props {
    isSelected: boolean;
}

// if param isSelected equals true, additional box-shadow and color will be added to Size
export const Size = styled.li<Props>`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.2rem 1rem;
  margin: 0.25rem 0;
  border: 2px solid ${({theme, isSelected}) => isSelected ? theme.secondaryGolden : theme.borderGrayColor};
  color: ${({theme, isSelected}) => isSelected && theme.secondaryGolden};
  border-radius: 9999px;
`;

export const SizingHelp = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  color: ${({theme}) => theme.lightGray};
`;
