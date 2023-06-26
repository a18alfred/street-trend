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
  font-size: 0.75rem;

  h3 {
    margin: 0;
  }
`;
export const ShippingInfo = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  ${backgroundAndPadding};

  @media ${({theme}) => theme.media.phone} {
    gap: 0.5rem;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Header = styled.p`
  font-weight: 600;
  white-space: nowrap;
  color: ${({theme}) => theme.primaryGolden};
`;

interface ContentProps {
    marginTop?: string;
}

export const Content = styled.p<ContentProps>`
  margin-top: ${({marginTop}) => marginTop};
`;

export const RouterLink = styled.a`
  color: ${({theme}) => theme.lightGray};

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }
`;

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 2rem;
  align-items: center;

  button {
    color: ${({theme}) => theme.dashboardGrayBg};
    background-color: ${({theme}) => theme.primaryGreen};
    width: 50%;
  }
`;
