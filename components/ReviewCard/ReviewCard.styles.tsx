import styled from 'styled-components';

interface Props {
    hasReviews: boolean;
}

export const CardContainer = styled.article<Props>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;
  width: 100%;

  button {
    width: max-content;
    margin-top: ${({hasReviews}) => hasReviews ? '0' : '1.5rem'};
    justify-self: end;
  }


  @media ${({theme}) => theme.media.tablet} {
    button {
      width: 100%;
    }
  }
`;

export const Review = styled.p`
  color: ${({theme}) => theme.lightGray};
`;
