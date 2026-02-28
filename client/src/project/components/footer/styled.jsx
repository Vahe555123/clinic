import styled from "styled-components";
import {Link} from "react-router-dom"
import {colors} from "../../assets/colors/index"
export const FooterDiv = styled.div`
    min-height:200px;
    background-color:#2c2a29 ;
    padding: 30px 70px 10px 70px;
    position: relative;
    z-index: 2;
    @media(max-width: 800px){
        padding: 15px 20px;
    }
`

export const FooterMain = styled.div`
    border-bottom: 1px solid #5f5e5d;
    display: flex;
    min-height: 70px;
    justify-content: space-between;
    @media(max-width: 800px){
        flex-direction: column;
        gap: 30px;
    }
`

export const FooterLogo = styled.div`
    width: 40%;
    display: flex;
    gap: 30px;
    @media(max-width: 800px){
         width: 100%;
         font-size: 25px;
    }
    

`

export const FoogterLogoImg = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export const FoogterLogoText = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    gap: 5px;
    @media(max-width: 800px){
        font-size: 18px;
    }
    @media(max-width: 600px){
         font-size: 15px;
    }
    @media(max-width: 400px){
        font-size: 13px;
    }
    
`

export const AddressDiv = styled.div`
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: white;
    font-size: 14px;
    @media(max-width: 1300px){
        flex-direction: column;
        gap: 0;
        align-items: start;
    }
    @media(max-width: 400px){
        font-size: 11px;
    }
    div{
        height: 60px;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        @media(max-width: 1300px){
            height: 50px;

    }
        span{
            font-size: 30px;
            color: white;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
`

export const FooterBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    @media(max-width: 1200px){
        flex-direction: column;
        align-items: start;
    }
`

export const FooterBottomParts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    @media(max-width: 1200px){
        width: 100%;
        justify-content: left;


    }
`

export const ImgDiv = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`

export const LicencesSpan = styled(Link)`
    color: white;
    text-decoration: none;
    transition: 0.3s;
       &:hover{
        color: ${colors.orangeColor};
    }
`



export const FooterLicenceTetx = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    gap: 5px;
    @media(max-width: 800px){
        font-size: 18px;
    }
    @media(max-width: 600px){
         font-size: 15px;
    }
    @media(max-width: 400px){
        font-size: 10px;
    }
   
`
export const PolicyDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
`

export const NameService = styled.div`
    text-align: center;
    color: white;
    font-size: 12px;
`