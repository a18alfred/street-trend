import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background-color: ${({theme}) => theme.primaryBg};
  min-height: 100vh;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;
export const LeftColumn = styled.section`
  flex: 0.6;
  padding: 1rem 2rem 1rem 0;
  margin-bottom: 80px;

  h1 {
    justify-content: flex-start;
    margin-left: 0;
  }

  @media ${({theme}) => theme.media.tablet} {
    padding: 1rem;
    flex: auto;
  }
`;
export const RightColumn = styled.section`
  flex: 0.4;
  padding: 1.25rem;
  background-color: ${({theme}) => theme.secondaryBg};

  @media ${({theme}) => theme.media.tablet} {
    flex: auto;
    margin: 0 -5%;
    padding: 1.25rem 2.5rem;
  }

  summary {
    display: flex;
    justify-content: center;
  }
`;

export const Details = styled.details`
  user-select: none;
  color: ${({theme}) => theme.primaryWhite};
  cursor: pointer;

  .icon {
    color: ${({theme}) => theme.primaryGolden};
    font-size: 1.5rem;
  }

  summary {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;
