import styled, {css} from 'styled-components';

const backgroundAndPadding = css`
  padding: 1rem;
  border-radius: ${({theme}) => theme.borderRadius};
  background-color: ${({theme}) => theme.secondaryBg};
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  h3 {
    margin: 1.5rem 0;
  }
`;

export const ShippingInfo = styled.form<{ flexRow?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  ${backgroundAndPadding};
  font-size: 0.75rem;

  @media ${({theme}) => theme.media.phone} {
    gap: 0.5rem;
    align-items: flex-start;
    flex-direction: ${({flexRow}) => flexRow ? 'row' : 'column'};
  }
`;

export const Header = styled.p`
  white-space: nowrap;
  color: ${({theme}) => theme.primaryGolden};
  font-weight: 600;
`;

export const Content = styled.p`
`;

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 2rem;
  align-items: center;

  button {
    color: ${({theme}) => theme.dashboardGrayBg};
  }
`;

export const RouterLink = styled.a`
  font-size: 0.75rem;
  color: ${({theme}) => theme.lightGray};

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }
`;
