import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.primaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem;
  font-size: 0.75rem;

  h3 {
    color: ${({theme}) => theme.primaryGolden};
    margin-bottom: 0.5rem;
  }
`;

export const LeftColumn = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0.5rem 2rem 0.5rem;

  border-bottom: 1px solid ${({theme}) => theme.borderGrayColor};
`;

export const RightColumn = styled.div`
  width: 100%;
  padding: 0.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const OrderItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 0 1.5rem 1rem 1rem;
  text-align: right;
  gap: 1rem;

  p:last-child {
    color: ${({theme}) => theme.primaryGolden};
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0 2px ${({theme}) => theme.secondaryGolden};
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

interface Props {
    margin?: string;
}

export const Subheader = styled.p<Props>`
  color: ${({theme}) => theme.lightGray};
  margin: ${({margin}) => margin};
`;

interface DeliveryProps {
    isDelivered: boolean;
}

export const DeliveryStatus = styled.p<DeliveryProps>`
  color: ${({isDelivered, theme}) =>
          isDelivered ? theme.activeGreen : theme.primaryWhite};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1rem;

  p:nth-child(2) {
    color: ${({theme}) => theme.primaryGolden};
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;

  button:nth-child(2) {
    background-color: ${({theme}) => theme.primaryGreen};
  }
`;
