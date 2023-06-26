import styled from 'styled-components';

export const Container = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    input {
      background-color: ${({theme}) => theme.dashboardGrayBg};
    }

    div {
      margin: 0;
      padding: 0;
    }
  }
`;

export const FormControl = styled.fieldset`
  display: flex;
  gap: 1.75rem;
  outline: 0;
  border: 0;

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 2rem;
  align-items: center;

  button {
    color: ${({theme}) => theme.dashboardGrayBg};
  }
`;

export const ReturnToCart = styled.a`
  font-size: 0.75rem;
  color: ${({theme}) => theme.lightGray};

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }
`;
