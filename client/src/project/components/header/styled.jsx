import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const HeaderDiv = styled.div`
    height:100px;
    display: flex;
    justify-content: space-around;
    padding: 0 50px;
    @media(max-width: 500px){
        padding: 0 10px;
    }
`

export const HeaderPartsIcons = styled.div`
    width: 20%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 500px){
        justify-content: left;
    }
`

export const HeaderPartsTitle = styled(Link)`
    width: 60%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderPartsSign = styled.div`
    width: 20%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
`

export const LogoText = styled(Link)`
     text-align: center;
     font-size: 30px;
     cursor: pointer;
     color: black;
     text-decoration: none;
`

export const MenuOpenIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    padding-left: 20px;
    font-size: 30px;
    gap: 10px;
    align-items: center;
    @media(max-width: 500px){
        padding-left: 10px;
         font-size: 25px;
    }
    span{
        cursor: pointer;
        display: flex;
    }

`

export const SignButton = styled.button`
    color:${colors.orangeColor} ;
    border: 1px solid ${colors.orangeColor};
    background-color: white;
    width: 140px;
    height: 45px;
    transition: 0.4s;
    font-size: 22px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: ${colors.orangeColor};
        color: black;
    }
    @media(max-width: 800px){
        display: none;
    }
`


export const SignIcon = styled.span`
    color:${colors.orangeColor} ;
    display: none;
    font-size: 30px;
    cursor: pointer;
    @media(max-width: 800px){
        display: block;
    }
    
`


export const LogoHeaderImg = styled.img`
    height: 100px;
    @media(max-width: 500px){
        height: 70px;
    }
`