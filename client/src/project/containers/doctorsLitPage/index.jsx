import { Breadcrumbs, MyDoctors } from "../../components";
import {  MainDiv } from "./styled";
export const MyDoctorsPage = () => {
    return (
        <>
            <Breadcrumbs title={"Специалисты"} />
            <MainDiv>
                <MyDoctors  active={false}/>
            </MainDiv>
        </>
    )
}