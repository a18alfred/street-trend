import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 350px;
  overflow: hidden;
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem;
`;
