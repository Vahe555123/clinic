import styled from "styled-components";
import { Link } from "react-router-dom"
export const MainDiv = styled.div`
    padding: 50px;
    @media(max-width: 700px){
        padding: 5px;
    }
`

export const ServiceTitle = styled.div`
    text-align: center;
    font-size: 35px;
    font-weight: bold;
`

export const ServicesDiv = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    min-height: 200px;
    @media(max-width: 700px){
        padding: 5px;
    }
`

export const ItemsDiv = styled(Link)`
    width: 400px;
    height: 400px;
    background-image: url(${({ img }) => `http://localhost:3000/uploads/${img}`});
    background-size: 100%;
    filter: grayscale(100%);
    transition: 0.3s;
    cursor: pointer;
    box-shadow: 0px 0px 53px 1px rgba(0,0,0,0.51) inset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    text-decoration: none;
    @media (max-width: 700px) {
        width: 90vw; 
        height: 90vw; 
}
    &:hover{
    filter: grayscale(0);
    }
    div{
        color: white;
        font-size: 25px;
        text-align: center;
    }

`