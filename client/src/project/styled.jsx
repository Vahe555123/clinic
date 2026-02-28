import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width:thin; /* Тонкий скроллбар */
        scrollbar-color: #b260b1 #f0f0f0; /* Цвет ползунка и трека */
        font-family: "Poppins", sans-serif;
        scroll-behavior: smooth;

    }
   
`;
