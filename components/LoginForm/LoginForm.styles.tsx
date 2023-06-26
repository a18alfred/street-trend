import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1rem;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;


  form {
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    top: 10%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: ${({theme}) => `${parseInt(theme.maxWidth) / 3}px`};
    width: 100%;

    margin: 0 auto;


    h3 {
      margin: 0;
    }
  }
`;
