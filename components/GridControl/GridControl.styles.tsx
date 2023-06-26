import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background: ${({theme}) => theme.secondaryBg};
  border-radius: ${({theme}) => theme.borderRadius};
  white-space: nowrap;

  h3 {
    margin: 0;
  }

  p {
    color: ${({theme}) => theme.lightGray};
  }

  @media ${({theme}) => theme.media.tablet} {
    h3 {
      display: none;
    }
  }
  @media ${({theme}) => theme.media.phone} {
    .product__amount {
      display: none;
    }

    .items__per__page {
      display: none;
    }
  }
`;

export const SortWrapper = styled.div`
  position: relative;
  color: ${({theme}) => theme.lightGray};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.secondaryGolden};
    }
  }

  span {
    margin-left: 0.5rem;
  }

  @media ${({theme}) => theme.media.phone} {
    span {
      margin-left: 0.5rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme}) => theme.lightGray};

  .icon {
    cursor: pointer;
    font-size: 1rem;

    @media (hover: hover) {
      &:hover {
        color: ${({theme}) => theme.secondaryGolden};
      }
    }
  }

  .icon-list {
    font-size: 1.25rem;
  }

  @media ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;
