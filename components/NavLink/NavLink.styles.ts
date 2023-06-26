import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  color: ${({theme}) => theme.lightGray};
  white-space: nowrap;
  text-transform: uppercase;

  .link-icon {
    margin-left: 0.5rem;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }
`;
