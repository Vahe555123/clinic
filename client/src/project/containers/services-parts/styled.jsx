import styled from "styled-components";
import { colors } from "../../assets/colors";
export const MainDiv = styled.div`
    min-height: 100vh;
`

export const Departments = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const DepartmentsButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms;
    height: 30px;
    padding:20px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 10px;
    color: ${({ active }) => active ? "black" : colors.orangeColor};
    background-color: ${({ active }) => active ? colors.orangeColor : "white"};
    &:hover{
        background-color: ${colors.orangeColor};
        color: black;
    }
`

export const DepartmentsDiv = styled.div`
    min-height: 500px;
    padding:  100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width: 600px){
        padding: 100px 10px;
    }

`

export const InfoMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const InfoParts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`


export const InfoTitle = styled.strong`
    font-size:20px ;
`

export const InfoLi = styled.li`
`

export const InfoUl = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    line-height: 30px;
`

export const PriceTitle = styled.h2`
    padding: 10px;
`
export const PriceTitleInfo = styled.div`
    padding: 10px;
    @media(max-width: 600px){
        font-size: 13px;
    }
`
export const PriceParts = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`
export const PriceLine = styled.div`
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    bottom: 29px;
    z-index: 0; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    height: 1px;
`
export const PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const PriceLeftPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 10px;
    position: relative;
    z-index: 2;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    @media(max-width: 600px){
        width: 70%;
        font-size: 14px;
    }
`;



export const PriceNum = styled.div`
    width: 20%;
    display: flex;
    padding: 10px;
    position: relative;
    z-index: 2;
    background-color: white;
    justify-content: center;
    @media(max-width: 600px){
        width: 35%;
        }
    @media(max-width: 400px){
        padding: 10px 0;
        font-size: 14px;
    }
`

export const PriceMainTitle = styled.strong`
    padding: 10px;
    font-size: 25px;
    @media(max-width: 600px){
        font-size: 18px;
    }
`

export const PriceCode = styled.div`
    font-size: 11px;
    color: rgba(0,0,0,0.5);
`