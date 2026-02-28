import styled from "styled-components";
import { colors } from "../../assets/colors";

export const MianDiv = styled.div`
    min-height: 100vh;
`

export const ClinicInfoDiv = styled.div`
display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 100px;
    @media(max-width: 700px){
        padding: 100px 20px;
    }
    `
export const ClinicInfoText = styled.div`
        
        
    `

export const FormDiv = styled.form`

`

export const ContactInfo = styled.div`
p{
    line-height: 30px;
}

`

export const FormInputsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    @media(max-width: 700px){
        flex-direction: column;
        gap: 20px;
    }
`


export const FormInputs = styled.input`
    width: 48%;
    height: 35px;
    outline-color: ${colors.orangeColor};
    border: 2px solid #dee2e6;
    padding-left: 10px;
    @media(max-width: 700px){
        width: 100%;
    }
`

export const FormTextArea = styled.textarea`
    width:100%;
    height: 100px;
    resize: vertical;
    outline-color: ${colors.orangeColor};
    border:2px solid #dee2e6;
    padding: 10px;
    margin-top: 20px;
`


export const FormButton = styled.button`
    width: 100%;
    background-color: ${colors.orangeColor};
    color: white;
    min-height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 21px;
    padding: 10px;
    cursor: pointer;   
    transition:0.5s ;
    margin-top: 10px;
    &:hover{
        opacity: 0.8;
    }
`