import styled, {css} from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  display: block;
  padding-left: 1.5rem;
  position: relative;

  /* Checked */

  .check__input:checked + .check__box {
    box-shadow: 0 0 0 0.2em ${({theme}) => theme.secondaryGolden};
  }

  /* Focused */

  .check__input:focus + .check__box {
    box-shadow: 0 0 0 0.1em ${({theme}) => theme.activeGreen},
    0 0 0 0.2em ${({theme}) => theme.secondaryGolden};
  }

  /* Disabled */

  .check__input:disabled + .check__box {
    box-shadow: 0 0 0 0.1em #9b9b9b;
  }

  .check__input:checked:disabled + .check__box {
    background-color: #9b9b9b;
  }
`;
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const CheckBox = styled.span`
  position: absolute;
  margin-top: 0.1em;
  margin-left: -1.5rem;
  width: 14px;
  height: 14px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  box-shadow: 0 0 0 0.1em ${({theme}) => theme.primaryGolden};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .check__icon {
    ${({theme}) => theme.mode === 'light' && css`
      filter: invert(100%);
    `}
  }
`;
