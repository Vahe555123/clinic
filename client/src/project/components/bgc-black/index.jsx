import React from "react";
import { MainDiv } from "./styled";

export const MyBgcBlack = ({setActive , active}) => {
    return(
        <MainDiv onClick={() => setActive(e => !e)} active={active}/>
    )
}