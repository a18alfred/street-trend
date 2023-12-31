import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const linkStyles = css`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.lightGray};

  .icon {
    font-size: 1.25rem;
    color: ${({theme}) => theme.primaryGolden};
    margin-right: 0.5rem;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.primaryGolden};
    }
  }
`;

export const LinkContent = styled.a`
  ${linkStyles}
`;

export const SignOut = styled.button`
  ${linkStyles}
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: 1rem;
`;
