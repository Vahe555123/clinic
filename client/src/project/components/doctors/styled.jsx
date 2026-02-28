import styled from "styled-components";
import { colors } from "../../assets/colors";
import { Link } from "react-router-dom";
export const DoctorTitle = styled.div`
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 100px;
`

export const CardDir = styled.div`
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin-bottom: 100px;
        
`

export const CardItem = styled(Link)`
    width: 70%;
    display: flex;
    justify-content: center;
    gap: 30px;
    text-decoration: none;
    color: black;
    img{
        width: 50%;
    }
    @media(max-width: 1200px){
        width: 90%;
    }
    @media(max-width: 600px){
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
`
export const CardInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 50px;
    @media(max-width: 1200px){
        width: 100%;
        padding: 10px;
    }
`

export const Surname = styled.div`
font-weight: 700;
color: ${colors.orangeColor};
font-size: clamp(20px, 5vw, 45px);
@media(max-width: 600px){
            text-align:center;
        }
    
`
export const Name = styled.div`
font-weight: 400;
color: ${colors.orangeColor};
font-size: clamp(16px, 4vw, 32px);
@media(max-width: 600px){
            text-align:center;
        }
`

export const BorderHR = styled.div`
    height:1px;
    background-color: ${colors.orangeColor};
    margin: 20px 0;
`
export const DescDiv = styled.div`
    font-size: clamp(8px, 2vw, 15px);
 `