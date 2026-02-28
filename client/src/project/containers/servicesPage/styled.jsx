import styled from "styled-components";
import { colors } from "../../assets/colors";
import { Link } from "react-router-dom";

export const MainDiv = styled.div`
    min-height: 100vh;
    background-color: white;
`

export const Departments = styled.div`
    width: 25%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-top: 50px;
    gap: 10px;
    position: ${({ active }) => active ? "fixed" : "none"};
    top: 0;
    left: 0;
    @media(max-width: 900px){
        display: none;
    }
`

export const ProductsDiv = styled.div`
    width: 75%;
    min-height: 100%;
    padding: 50px 100px;
    margin-left: ${({ active }) => active ? "25%" : "0"};
    @media(max-width: 900px){
        margin-left: 0;
        width: 100%;

    }
    @media(max-width: 500px){
        padding: 10px 20px;
    }

`

export const ShowButtons = styled.a`
        font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: ${(props) => (props.dep === props.href.slice(1) ? `${colors.orangeColor}` : '#0006')};
    &:hover{
        color: ${colors.orangeColor};

    }
`


export const ServicesDiv = styled.div`
    display: flex;
`

export const ServicesDivTitle = styled.div`
line-height: 40px;

    
`

export const ServicesDivTitleDark = styled.span`
    font-weight: bold;
`

export const ServicesMainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;
    margin-top: 30px;
    @media(max-width: 500px){
       flex-direction: column;
       align-items: center;
    }
`

export const ServicesItemsDiv = styled(Link)`
    width:48%;
    height :100px ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    background-size:100%;
    transition:  0.3s ease;
    background-position: center;
    text-align: center;
    background-color: ${colors.orangeColor};
    font-size: 1.5vw;
    &:hover{
        background-image: ${({ src }) =>
        src ? `url(http://localhost:3000/uploads/${src})` : 'none'};
    }
    @media(max-width: 500px){
       width:100%;
    font-size: 4vw;

    }
    `

