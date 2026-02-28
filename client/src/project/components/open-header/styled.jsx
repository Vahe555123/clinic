import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const OpenHeaderDiv = styled.div`
    width: 400px;
    height: 100vh;
    background-color: white;
    position: fixed;
    left: ${({ active }) => active ? 0 : "-400px"};
    top: 0;
    z-index: 4;
    transition: 0.5s;
    overflow-y: scroll;
    padding-bottom: 70px;
    @media(max-width: 500px){
        width: 100%;
         left: ${({ active }) => active ? 0 : "-100%"};
    }

`

export const CloseDiv = styled.div`
        height: 50px;
        font-size: 45px;
        padding-left: 30px;
        padding-top: 30px;
        span{
            cursor: pointer;
        }
`

export const Departments = styled.div`
        width: 100%;
        padding: 0 36px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 50px;
        span{
            color: rgba(0, 0, 0, 0.5);
            font-size: 1.1rem;
        }
`

export const DepartmentsLink = styled(Link)`
    text-decoration :none ;
    color: black;
    font-size: 25px;
    position: relative;
    display: inline-block;
    cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: ${colors.orangeColor};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media(max-width: 400px){
    font-size: 17px;

    }

`