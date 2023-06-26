import styled, {css} from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Filter = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
  gap: 1rem;
  font-size: 0.75rem;
`;

export const UserCard = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 0.5rem 2rem;
  width: 100%;
  cursor: pointer;
  gap: 1rem;
  font-size: 0.75rem;

  .icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: ${({theme}) => theme.primaryGolden};
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0 2px ${({theme}) => theme.secondaryGolden};
    }
  }
`;

const linkStyles = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${({theme}) => theme.primaryWhite};
`;

export const MailClient = styled.a`
  ${linkStyles}
`;

export const ClientInfo = styled.div`
  ${linkStyles}
`;

export const Role = styled.div`
  ${linkStyles}
`;
