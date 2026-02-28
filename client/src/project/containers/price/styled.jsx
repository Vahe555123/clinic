import styled from "styled-components";
import { colors } from "../../assets/colors";
import { Link } from "react-router-dom"
export const MainDiv = styled.div`
    min-height: 100vh;
    margin-bottom: 200px;
`

export const InfoDiv = styled.div`
    display: flex;
    @media(max-width: 1000px){}
`

export const Departments = styled.div`
    width: 33%;
    position: ${({ active }) => active ? "fixed" : "static"};
    left: 0;
    height: 100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 100px;
    padding-top: 50px;
    @media(max-width: 1100px){
    padding-left: 20px;
    }
    @media(max-width: 800px){
        display: none;
    }


`

export const DepartmentsItems = styled.a`
font-size: 20px;
color: ${({ active }) => active ? colors.orangeColor : "#0006"};
cursor: pointer;
font-weight: 700;
text-decoration: none;

    &:hover{
        color: ${colors.orangeColor};
    }
`

export const ServicesDiv = styled.div`
    min-height: 100vh;
    width: 67%;
    margin-left: ${({ active }) => active ? "33%" : "0%"};
    padding-top: 50px;
    @media(max-width: 800px){
        width: 100%;
        margin-left : 0;
    }
    

`

export const ServicesDesc = styled.div`
padding-right: 100px;
padding-left: 50px;
font-weight:700;
@media(max-width: 800px){
    font-size: 13px;
    padding: 0 50px;
}
@media(max-width: 500px){
    font-size: 11px;
    padding: 0 10px;
}
`

export const ServicesInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 70px;
`
export const ServicesTitle = styled.div`
padding-left: 50px;
font-weight:700;
font-size: 25px;
@media(max-width: 800px){
    font-size: 18px;
    padding: 0 50px;
}
@media(max-width: 500px){
    font-size: 15px;
    padding: 0 10px;
}
`
export const ServicesItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
`

export const ServicesItemsTitle = styled.div`

`
export const ServicesItemsTitleLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: ${colors.orangeColor};
    @media(max-width: 800px){
    font-size: 18px;
}
@media(max-width: 500px){
    font-size: 15px;
    padding: 0 10px 0 0;
}
`

export const ShowTetx = styled.div`
    color: #0006;
    text-decoration: underline;
    font-size: 18px;
    cursor: pointer;
    @media(max-width: 800px){
    font-size: 18px;
    padding: 0 50px;
}
@media(max-width: 500px){
    font-size: 15px;
    padding: 0 10px 0 0;
}
`
export const ItemsDiv = styled.div`
       display: flex;
    justify-content: space-between;
    padding-right: 30px;
    margin: 20px 0 ;
`

export const ShowPriceDiv = styled.div`
    width:100% ;
    height: 400px;
    background-color: green;
`


export const PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const PriceLeftPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding-top: 10px;
    position: relative;
    z-index: 2;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 17px;
    padding-right: 10px;
    @media(max-width: 1000px){
    font-size: 12px;

    }
`;



export const PriceNum = styled.div`
    width: 15%;
    display: flex;
    position: relative;
    z-index: 2;
    background-color: white;
    display: flex;
    padding: 0 10px;
    font-size: 17px;
     
    align-items: center;
    @media(max-width: 1000px){
    font-size: 12px;
    }

    @media(max-width: 510px){
    padding:  0;
    width: 35%;
    margin-right: 10px;
}
`

export const PriceMainTitle = styled.strong`
    font-size: 25px;
    margin-top: 15px;
`

export const PriceCode = styled.div`
    font-size: 11px;
    color: rgba(0,0,0,0.5);
`

export const PriceParts = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
`
export const PriceLine = styled.div`
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    bottom: 17px;
    z-index: 1; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    height: 1px;
    width: 100%;
`