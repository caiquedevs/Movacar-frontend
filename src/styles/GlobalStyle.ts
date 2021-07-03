import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  /* largura do scroll vertical e horizonal*/
  ::-webkit-scrollbar { width: 0px; height: 4px; }
  /* Cor do scroll*/
  ::-webkit-scrollbar-thumb { background: silver; }
  /* Fundo do scroll*/
  ::-webkit-scrollbar-track { background: transparent; }

  *{
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    font-family: roboto, sans-serif;
  }

  h1 {
    margin-bottom: 30px;

    font-family: Russo One;
    font-size: 13px;
    line-height: 16px;
    color: ${colors.white};
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  .toast-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .Toastify__toast{
    width: 100%;
    max-width: 325px;
    margin-top: 7px;
    margin-right: 7px;
  }

  body{
    background-color: ${colors.light}
  }

  @keyframes effect {
    from {
      opacity: 0;
      transform: translate3d(0, 60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  div.toastify{
    display: flex;
    align-items: center;

    svg{ margin: 0 10px 0 10px;}
  }

  section.active {
    visibility: visible;
    opacity: 1;
  }

  input.default{
    width: 100%;
    max-width: 300px;
    height: 45px;
    padding: 0px 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #eeeeee;
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    font-size: 16px;

    ::-webkit-input-placeholder {
      font-size: 16px;
    }
  }

  button.default {
    width: auto;
    height: auto;
    background: none;
    border: none;
  }
  button.primary {
    width: 100%;
    max-width: 300px;
    height: 45px;
    padding: 0 17px;
    border: none;
    background-color: #F9C71B;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    transition: 0.3s all;
  }

  button:hover{
    cursor: pointer;
    opacity: 0.8;
  }

`;

export default GlobalStyle;
