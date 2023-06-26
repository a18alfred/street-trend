import styled from 'styled-components';

export const Container = styled.main``;

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media ${({theme}) => theme.media.desktop} {
    display: none;
  }
@media${({theme}) => theme.media.tablet} {
  h2 {
    margin-top: 2rem;
  }
}
`;
