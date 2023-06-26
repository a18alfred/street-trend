import styled from 'styled-components';
import {slideInTop} from '../../theme/reusableCss';

export const Container = styled.div`
`;

export const FilterOption = styled.details`
  summary {
    cursor: pointer;
    color: ${({theme}) => theme.lightGray};
  }
`;

export const FilterButton = styled.button<{ fixedWidth?: string }>`
  width: ${({fixedWidth}) => fixedWidth ? fixedWidth : 'auto'};
  height: ${({fixedWidth}) => fixedWidth ? fixedWidth : 'auto'};
  cursor: pointer;
  background: transparent;
  color: ${({theme}) => theme.primaryWhite};
  font-size: 0.75rem;
  padding: 0.25rem ${({fixedWidth}) => fixedWidth ? '0.25rem' : '1rem'};;
  margin: 0.25rem;
  border: 2px solid ${({theme}) => theme.borderGrayColor};
  border-radius: ${({theme}) => theme.borderRadius};
  animation: ${slideInTop} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  white-space: nowrap;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      color: ${({theme}) => theme.primaryGolden};
      border: 2px solid ${({theme}) => theme.primaryGolden};
    }
  }
`;

export const RemoveFilterButton = styled(FilterButton)``;
