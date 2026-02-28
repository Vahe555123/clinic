import React, { useEffect, useState } from "react"
import { BorderHR, CardDir, CardInfo, CardItem, DescDiv, DoctorTitle, Name, Surname } from "./styled"
import productApi from "../../api/servicesApi"
import { Link } from "react-router-dom"
export const MyDoctors = ({active}) => {
    const [value, setValue] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await productApi.getDoctors()
            setValue(response.data.data);
        }
        getData()
    }, [])
    return (
        <>
            {active && <DoctorTitle>Специалисты</DoctorTitle>}
            <CardDir >
                {value.length > 0 && value.map((e, i) => {
                    const FIO = e.name.split(" ")
                    return (
                        <CardItem key={e + i} to={`/doctors/${e._id}`}>
                                <img src={`http://localhost:3000/uploads/${e.image}`} />
                            <CardInfo>
                                <Surname>
                                    {FIO[0]}
                                </Surname>
                                <Name>
                                    {FIO[1]}
                                </Name>
                                <Name>
                                    {FIO[2]}
                                </Name>
                                <BorderHR />
                                <DescDiv>
                                    {e.description}
                                </DescDiv>
                            </CardInfo>
                        </CardItem>
                    )
                })}
            </CardDir>


        </>
    )
}