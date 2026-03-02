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
    padding: 50px 60px;
    margin-left: ${({ active }) => active ? "25%" : "0"};
    @media(max-width: 900px){
        margin-left: 0;
        width: 100%;
        padding: 30px 20px;
    }
    @media(max-width: 500px){
        padding: 15px 12px;
    }
`

export const ShowButtons = styled.a`
    font-size: 22px;
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
    line-height: 1.8;
    font-size: 16px;
    color: #444;
    margin-bottom: 10px;
`

export const ServicesDivTitleDark = styled.span`
    font-weight: bold;
    color: #222;
    font-size: 28px;
    display: block;
    margin-bottom: 8px;
    @media(max-width: 600px){
        font-size: 22px;
    }
`

export const ServicesMainDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 30px;
    @media(max-width: 700px){
        grid-template-columns: 1fr;
        gap: 12px;
    }
`

export const ServicesItemsDiv = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #222;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 28px 20px;
    border-radius: 14px;
    background-color: #f7f0f7;
    border: 2px solid transparent;
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    min-height: 100px;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255,255,255,0.7);
        opacity: 0;
        transition: opacity 0.35s ease;
        z-index: 0;
    }

    &:hover {
        border-color: ${colors.orangeColor};
        background-image: ${({ src }) => src ? `url(${src})` : 'none'};
        box-shadow: 0 6px 24px rgba(179, 147, 178, 0.2);
        transform: translateY(-2px);
        &::before {
            opacity: ${({ src }) => src ? 1 : 0};
        }
    }

    & > * {
        position: relative;
        z-index: 1;
    }

    @media(max-width: 700px){
        font-size: 15px;
        padding: 22px 16px;
        min-height: 80px;
    }
`
