import styled from "styled-components";
import { colors } from "../../assets/colors";

export const MainDiv = styled.div`
    position: fixed;
    transition: bottom 0.5s, opacity 0.5s, top 0.5s;
    top: ${({ active }) => (active ? "50%" : "70%")}; 
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 400px;
    min-height: 400px;
    background-color: white;
    opacity: ${({ active }) => (active ? "1" : "0")};
    min-height: ${({ active }) => active ? "400px" : "0"};
    z-index: ${({ active }) => active ? 4 : -1};
    @media(max-width: 500px){
        width: 100%;
    }
`

export const CloseDiv = styled.div`
    text-align: right;
    padding-right: 20px;
    margin-top: 10px;
    position: absolute;
    right: 0;
    cursor: pointer;
    span{
        font-size: 35px;
        transition: 0.3s;

        &:hover{
            font-size: 35px;
            color: gray;
        }
    }
`
export const FormDiv = styled.div`
    padding:60px 20px;

`
export const MoreInputs = styled.input`
    width: 100%;
    outline-color: ${colors.orangeColor};
    border-radius: 5px;
    transition: 0.5s;
    border: 1px solid #dee2e6;
    height: 40px;
    padding-left: 10px;
`

export const ShowMore = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${colors.orangeColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition:0.5s ;
    padding: 20px;
    text-align: center;
    
    &:hover{
        opacity: 0.8;
    }
`


export const ShowMoreForm = styled.div`
    width: 100%;
    transition: 300ms;
    height: ${({ active }) => active ? "270px" : 0};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`

export const MoreTextArea = styled.textarea`
     width: 100%;
    outline-color: ${colors.orangeColor};
    border-radius: 5px;
    transition: 0.5s;
    border: 1px solid #dee2e6;
    padding-left: 10px;
    padding-top: 10px;
    resize: none;
    height: 100px;
`

export const SignButton = styled.button`
    width: 100%;
    background-color: ${({BgColor}) => BgColor};
    color: ${({color}) => color};
    min-height: 40px; 
    border: none;
    border-radius: 5px;
    font-size: 21px;
    padding: 10px;
    cursor: pointer;   
    transition:0.5s ;
    margin-top: 10px;
    a{
        color: white;
        text-decoration: none;
    }
    &:hover{
        opacity: 0.8;
    }
`


export const PolicyInfo = styled.div`
    margin-top: 10px;
    font-size: 18px;
        *{
            color: ${colors.orangeColor};
            padding-top: 7px;
            text-decoration: none;
        }
        div{
            color: black;
        }
`