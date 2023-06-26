import styled, {css} from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
  }
`;

const backgroundAndBorder = css`
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;
`;

export const LeftColumn = styled.section`
  ${backgroundAndBorder};
  flex: max(0.7, 1);
`;
export const RightColumn = styled.aside`
  ${backgroundAndBorder};
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${({theme}) => theme.lightGray};
    text-align: center;
  }

  @media ${({theme}) => theme.media.tablet} {
    max-height: 50vh;
    p {
      margin-bottom: 1rem;
    }
  }
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: 100%;
  }
`;

export const Total = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const StreetTrend = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 1.25rem;
  margin: 1rem 0;
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({theme}) => theme.secondaryGolden};
  box-shadow: 0 0 0 2px ${({theme}) => theme.secondaryGolden};
  border-radius: ${({theme}) => theme.borderRadius};
`;
