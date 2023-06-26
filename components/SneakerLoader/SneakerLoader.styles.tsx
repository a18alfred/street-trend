import styled, {keyframes} from 'styled-components';

const loadingKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${loadingKeyframes} 2500ms infinite linear;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 240px;
  max-height: 150px;
  margin: 0 auto;
  animation: ${loadingKeyframes} 2500ms infinite linear;
`;