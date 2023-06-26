import styled, {css} from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 0.25rem 0;
  width: 100%;
`;

export const Label = styled.label<{ isEmpty: boolean }>`
  position: absolute;
  color: ${({theme, isEmpty}) => isEmpty ? theme.lightGray : theme.primaryGolden};
  top: ${({isEmpty}) => isEmpty ? '50%' : '-8px'};
  left: ${({isEmpty}) => isEmpty ? '1rem' : '0'};
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  pointer-events: none;

  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }

  ${({isEmpty}) => !isEmpty && css`
    font-size: 12px;
  `}
`;

export const Input = styled.input`
  display: block;
  height: 3rem;
  padding: 1rem;
  width: 100%;
  background: ${({theme}) => theme.secondaryBg};
  border: none;
  color: ${({theme}) => theme.primaryWhite};
  border-radius: ${({theme}) => theme.borderRadius};


  &:default {
    background-color: red;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({theme}) => theme.secondaryGolden};
    border-color: ${({theme}) => theme.primaryGolden};
  }

  [data-empty='false'] + label,
  :valid + label,
  :focus + label {
    top: -8px;
    left: 0px;
    font-size: 12px;
    color: ${({theme}) => theme.primaryGolden};
  }

  @media ${({theme}) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
