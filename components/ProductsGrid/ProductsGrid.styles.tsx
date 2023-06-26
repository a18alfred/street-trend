import styled, {css} from 'styled-components';

interface Props {
    layoutType: 'vertical' | 'grid';
}

const verticalLayout = css`
  grid-template-columns: 1fr;

  article {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    gap: 1rem;

    @media ${({theme}) => theme.media.phone} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      figure {
        width: 100%;
      }
      
      div {
        flex-direction: column;
        text-align: left;
      }
    }
  }
`;
const gridLayout = css`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.section<Props>`
  display: grid;
  ${({layoutType}) => (layoutType === 'grid' ? gridLayout : verticalLayout)}
  gap: 1rem;
  overflow: hidden;
  min-width: 100%;
`;
