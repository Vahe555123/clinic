import styled from "styled-components";
import { colors } from "../../assets/colors";
import { Link } from "react-router-dom";
export const MainDiv = styled.div`
    min-height:50vh;
    margin: 50px 0;
`

export const SearchInputDiv = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    input{
        width: 70%;
        height: 40px;
        border: 1px solid ${colors.orangeColor};
        padding-left: 30px;
        outline: none;
    }
    button{
        background-color:${colors.orangeColor};
        height: 40px;
        width: 100px;
        border: none;
        cursor: pointer;
    }
`

export const CardContainer = styled.div`
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 100px;
`
export const CardItem = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const Card = styled(Link)`
    width: 200px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: black;
    text-decoration: none;
    p{
        text-align: center;
        padding: 0 15px;
    }
    div{
        height: 200px;
        display: flex;
        align-items: start;
    }
    img{
        width: 200px;
        height: 200px;
        object-fit: contain;
        border-radius: 10px;
    }
`

export const FlexDiv = styled.div`
    display:flex ;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    @media(max-width: 1000px){
        gap: 10px;
    }
`