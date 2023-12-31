import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${({theme}) => theme.primaryWhite};
  display: flex;
  align-items: center;
  border: none;
  width: 28px;
  height: 28px;
  margin-right: 5px;

  span {
    margin-left: 1.25rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media ${({theme}) => theme.media.tablet} {
    flex: auto;

    span {
      margin-left: 1.25rem;
      font-size: 0.75rem;
    }
  }
`;

export const ModalContentWrap = styled.div``;
