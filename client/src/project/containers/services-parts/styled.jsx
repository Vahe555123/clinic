import styled from "styled-components";
import { colors } from "../../assets/colors";

export const MainDiv = styled.div`
    min-height: 100vh;
    background-color: #fafafa;
`

export const Departments = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
    margin-top: 20px;
    padding: 0 20px;
    flex-wrap: wrap;
`

export const DepartmentsButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms;
    height: 44px;
    padding: 0 28px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    border-radius: 22px;
    color: ${({ active }) => active ? "#fff" : colors.orangeColor};
    background-color: ${({ active }) => active ? colors.orangeColor : "#fff"};
    border: 2px solid ${colors.orangeColor};
    &:hover{
        background-color: ${colors.orangeColor};
        color: #fff;
    }
    @media(max-width: 600px){
        font-size: 14px;
        padding: 0 20px;
        height: 38px;
    }
`

export const DepartmentsDiv = styled.div`
    min-height: 400px;
    padding: 40px 80px 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width: 800px){
        padding: 30px 30px 40px;
    }
    @media(max-width: 500px){
        padding: 20px 12px 30px;
    }
`

export const InfoMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const InfoParts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    @media(max-width: 500px){
        padding: 16px;
    }
`

export const InfoTitle = styled.strong`
    font-size: 20px;
    color: #222;
    @media(max-width: 600px){
        font-size: 17px;
    }
`

export const InfoLi = styled.li`
    color: #444;
    line-height: 1.7;
`

export const InfoUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    line-height: 1.7;
    color: #444;
    padding-left: 18px;
`

export const PriceTitle = styled.h2`
    font-size: 28px;
    color: #222;
    margin-bottom: 4px;
    @media(max-width: 600px){
        font-size: 22px;
    }
`

export const PriceTitleInfo = styled.div`
    color: #777;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
    @media(max-width: 600px){
        font-size: 13px;
    }
`

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    @media(max-width: 500px){
        padding: 14px;
    }
`

export const PriceMainTitle = styled.strong`
    font-size: 20px;
    color: ${colors.orangeColor};
    margin-bottom: 12px;
    display: block;
    @media(max-width: 600px){
        font-size: 17px;
    }
`

export const PriceParts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &:last-child {
        border-bottom: none;
    }
`

export const PriceLine = styled.div`
    flex: 1;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.12);
    margin: 0 8px;
    min-width: 20px;
    align-self: flex-end;
    margin-bottom: 6px;
`

export const PriceLeftPart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex-shrink: 1;
    max-width: 70%;
    font-size: 15px;
    color: #333;
    @media(max-width: 600px){
        max-width: 65%;
        font-size: 13px;
    }
`

export const PriceNum = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #222;
    white-space: nowrap;
    flex-shrink: 0;
    @media(max-width: 600px){
        font-size: 14px;
    }
`

export const PriceCode = styled.div`
    font-size: 11px;
    color: rgba(0,0,0,0.4);
    margin-top: 2px;
`
