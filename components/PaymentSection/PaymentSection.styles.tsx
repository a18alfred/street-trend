import styled, {css} from 'styled-components';
import {slideInTop} from '../../theme/reusableCss';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const formControlCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const FormControl = styled.div`
  ${formControlCss}
`;

export const FormTextControl = styled.div`
  ${formControlCss}
`;

export const CreditCardProviders = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const CreditCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  animation: ${slideInTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
