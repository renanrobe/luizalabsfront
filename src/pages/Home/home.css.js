import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${ theme.widths.extraLarge };

  @media(max-width: ${theme.widths.extraLarge}) {
    margin 0 50px;
  }
`;

export const Header = styled.header`
  margin-top: 20px;
  text-align: center;
`;

  export const Title = styled.h2`
    color: ${ theme.colors.grayDark };
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
    text-transform: uppercase;
  `;

  export const Subtitle = styled.span`
    color: ${ theme.colors.gray };
  `;

  export const Content = styled.section`
    display: block;
    min-height: 500px;
  `;
    export const Loading = styled.div`
      margin: 50px auto;
      max-width: 200px;
      
      img {
        width: 200px;
      }
    `;
    export const List = styled.ul`
      display: grid;
      gap: 50px;
      grid-template-columns: repeat(4, 1fr);
      margin: 50px 0 100px;

      @media(max-width: ${theme.widths.extraLarge}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(max-width: ${theme.widths.large}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media(max-width: ${theme.widths.medium}) {
        grid-template-columns: repeat(1, 1fr);
      }
      
    `;
      export const Search = styled.div`
        background-color: ${ theme.colors.redLight };
        border-radius: 30px;
        box-sizing: border-box;
        height: 42px;
        margin: 30px auto 50px;
        padding: 10px;
        position: relative;
        width: 75%;

        > svg {
          left: 20px;
          position: absolute;
          top: 11px;
          z-index: 3;
        }

        > input {
          background: transparent;
          border: 0;
          box-sizing: border-box;
          color: ${ theme.colors.red };
          left: 10px;
          outline: none;
          padding: 7px 40px 7px 50px;
          position: absolute;
          top: 6px;
          width: 98%;
          z-index: 2;
        }
      `;
      export const Toolbar = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: ${theme.widths.extraLarge}) {
          display: block;
        }

        > div {
          display: flex;
          align-items: center;

          @media(max-width: ${theme.widths.small}) {
            display: block;
          }

          > div {
            display: flex;
            align-items: center;
          }
        }

        > p {
          color: ${ theme.colors.grayLight };
        }
      `;
    export const Sort = styled.div`
      color: ${ theme.colors.red };
      cursor: pointer;

      @media(max-width: ${theme.widths.small}) {
        margin: 10px 0;
      }

      > svg {
        margin-right: 8px;
        position: relative;
        top: 4px;
      }
    `;
    export const Toggle = styled.div`
      cursor: pointer;
      display: flex;
      margin: 0 20px 0 50px;

      @media(max-width: ${theme.widths.small}) {
        margin: 0 20px 0 0;
      }

      svg {
        width: 60px;
      }
    `;
    export const Favorites = styled.div`
      color: ${ theme.colors.red };

      > svg {
        margin-right: 8px;
        position: relative;
        top: 3px;
      }
    `; 

      