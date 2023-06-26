import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 1.7;
  color: ${({theme}) => theme.primaryWhite};
  @media ${({theme}) => theme.media.phone} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  a {
    color: ${({theme}) => theme.lightGray};
  }


  @media ${({theme}) => theme.media.tablet} {
    ul {
      white-space: nowrap;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      row-gap: 0rem;
      align-items: center;
      justify-content: center;
    }

    h2 {
      text-align: center;
    }
  }
`;

export const StreetTrendPlus = styled.h3`
  text-transform: uppercase;
  color: ${({theme}) => theme.primaryGolden};
  font-size: 1.25rem;
`;
