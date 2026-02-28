import styled from "styled-components";


export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
    position: fixed;
    z-index: 3;
    display: ${({active}) => active ? "block" : "none"};
    top: 0;
`