import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const FilterName = styled.h3`
  text-transform: capitalize;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.25rem;
  color: ${({theme}) => theme.lightGray};
`;

export const RemoveBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.primaryGolden};
  height: 26px;

  .remove_icon {
    font-size: 1.5rem;
  }
`;
