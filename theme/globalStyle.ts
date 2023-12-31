import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.primaryWhite};
    background: ${({theme}) => theme.primaryBg};
    line-height: 1.4;
    font-size: 1rem;
  }

  html {
    height: 100%;
    overflow: auto
  }

  body {
    height: 100%;
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  input {
    font-family: 'Poppins', sans-serif;

    ::placeholder {
      font-family: 'Poppins', sans-serif;
    }
  }

  button {
    font-family: inherit;

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({theme}) => theme.secondaryGolden};
      border-radius: ${({theme}) => theme.borderRadius};
    }
  }

  button, input, a {
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({theme}) => theme.secondaryGolden};
      border-radius: ${({theme}) => theme.borderRadius};
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);

  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.primaryGolden};
  }

  .Toastify__toast--error {
    position: relative;
    border-radius: 50px !important;
    background: ${({theme}) => theme.primaryRed};
    color: white;
    font-weight: 600;
    max-width: 75vw;
    margin: 1rem auto;
    box-shadow: ${({theme}) => theme.boxShadowLg};
    text-align: center;
  }

  .Toastify__toast--success {
    position: relative;
    border-radius: 50px !important;
    background: ${({theme}) => theme.primaryGreen};
    color: white;
    font-weight: 600;
    max-width: 75vw;
    margin: 1rem auto;
    box-shadow: ${({theme}) => theme.boxShadowLg};
    text-align: center;
  }

  .Toastify__close-button {
    position: absolute;
    right: 20px;
    top: 8px;
  }
`;


