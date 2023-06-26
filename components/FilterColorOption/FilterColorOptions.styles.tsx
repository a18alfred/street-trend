import styled, {css} from 'styled-components';
import {slideInTop} from '../../theme/reusableCss';

export const Container = styled.div`
`;

export const FilterOption = styled.details`
  summary {
    cursor: pointer;
    color: ${({theme}) => theme.lightGray};
  }
`;

export const ColorsGrid = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface Props {
    bgColor: string;
}

const rainbowGradient = css`
  background: linear-gradient(to right,
  #FF5252,
  #FFD700,
  #52BE80,
  #00A8FF);
`;

export const FilterButton = styled.button<Props>`
  cursor: pointer;
  background: transparent;
  border: none;
  height: 2rem;
  width: 2rem;
  user-select: none;
  background: ${({bgColor}) => bgColor};
  border-radius: ${({theme}) => theme.borderRadius};
  ${({bgColor}) => bgColor === 'multi' && rainbowGradient}
  animation: ${slideInTop} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;
