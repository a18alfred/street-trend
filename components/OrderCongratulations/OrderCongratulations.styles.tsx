import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1.5rem;
`;

export const OrderStatus = styled.header`
  p {
    color: ${({theme}) => theme.lightGray};
  }

  span {
    color: ${({theme}) => theme.primaryGolden};
    margin: 0 0.25rem;
  }
`;

export const OrderItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: ${({theme}) => theme.primaryBg};
  border-radius: ${({theme}) => theme.borderRadius};

  h4 {
    color: ${({theme}) => theme.primaryGolden};
  }
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({theme}) => theme.lightGray};

  h3 {
    color: ${({theme}) => theme.primaryWhite};
    font-weight: 400;
    font-size: 1rem;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: right;
    width: 100%;
    margin-left: 2rem;
  }
`;

export const ButtonWrapper = styled.footer`
  display: flex;
  gap: 1.5rem;

  button {
    width: 100%;
  }

  button:nth-child(2) {
    background-color: ${({theme}) => theme.primaryGreen};

    @media (hover: hover) {
      :hover {
        background-color: ${({theme}) => theme.activeGreen};
      }
    }
  }
`;
