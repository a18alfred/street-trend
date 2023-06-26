import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 1rem;
  background: ${({theme}) => theme.primaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  font-size: 0.75rem;
`;

export const LeftColumn = styled.div`
`;
export const RightColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Figcaption = styled.figcaption``;

export const ProductName = styled.h3`
  font-weight: 400;
  color: ${({theme}) => theme.lightGray};
`;
export const Size = styled.p`
  color: ${({theme}) => theme.lightGray};
`;

export const Price = styled.p`
  color: ${({theme}) => theme.primaryGolden};
  font-weight: bold;
`;
