import styled from "styled-components";

export const MainDiv = styled.div`
    min-height: 100vh;
    padding: 100px;
    font-size: 20px;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width:1000px){
        padding: 100px 20px;
        width: 100%;
        font-size: 15px;
    }
    @media(max-width: 400px){
        a{
            font-size: 12px;
        }
    }
`

export const TitleDiv = styled.div`
        font-size: 35px;
        @media(max-width:1000px){
            font-size: 25px;
    }
    @media(max-width:400px){
            font-size: 20px;
    }
`

