import styled from "styled-components";

export const MainDiv = styled.div`
    min-height:50vh;
    display: flex;
    padding:  60px 0;
    @media(max-width: 700px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const ImgDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: right;
    img{
        height: 400px;
    }
    @media(max-width: 700px){
        width:90%;
    justify-content: center;
        img{
    }
    }

`

export const TextDiv = styled.div`
    width: 60%;
    padding:40px 100px;
    line-height: 40px;
    @media(max-width: 1200px){
        padding:40px 30px;
    }
    @media(max-width: 700px){
        width:90%;

    }
`