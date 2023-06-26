import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const Form = styled.form`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 5rem 0.5rem 1rem;
  border: none;
  appearance: none;
  height: 36px;
  background: ${({theme}) => theme.secondaryBg};
  color: ${({theme}) => theme.primaryWhite};;
  font-size: 1rem;

  &::placeholder {
    color: ${({theme}) => theme.darkGray};;
    font-size: 1rem;
  }

  &:focus-visible {
    box-shadow: none;
  }

  border-radius: ${({theme}) => theme.borderRadius};
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 36px;
  background-color: ${({theme}) => theme.primaryGolden};
  border-radius: 0 ${({theme}) => theme.borderRadius} ${({theme}) => theme.borderRadius} 0;
  border: none;

  .search-icon {
    font-size: 1.25rem;
    color: ${({theme}) => theme.primaryBg};
  }

  &:focus-visible {
    box-shadow: none;
    border-radius: 0 ${({theme}) => theme.borderRadius} ${({theme}) => theme.borderRadius} 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    text-align: center;
  }

  @media ${({theme}) => theme.media.phone} {
    padding: 0.25rem;
  }
`;

export const Product = styled.article`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: nowrap;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-radius: ${({theme}) => theme.borderRadius};
  background: ${({theme}) => theme.secondaryBg};
  padding: 1rem;

  figure {
    width: max-content;
  }

  p:nth-child(2) {
    color: ${({theme}) => theme.primaryGolden};
  }

  @media (hover: hover) {
    &:hover {
      background: ${({theme}) => theme.secondaryBgLightest};
    }
  }

  @media ${({theme}) => theme.media.phone} {
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    p {
      font-size: 0.75rem;
    }
  }
`;
