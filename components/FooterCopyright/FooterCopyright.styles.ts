import styled from 'styled-components';

export const FooterCopyrightSection = styled.section`
  font-size: 0.75rem;
  color: ${({theme}) => theme.lightGray};
  margin-bottom: 1.5rem;

  ul {
    display: flex;

    li:nth-child(n + 2) {
      margin-left: 0.75rem;
    }
  }

  .router-link {
    color: ${({theme}) => theme.lightGray};
  }

  @media ${({theme}) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    margin-bottom: 5.5rem;
  }
`;
