import { useState, useEffect } from "react";


import { Breadcrumbs } from "../../components";
import { Card, CardContainer, CardItem, FlexDiv, MainDiv, SearchInputDiv } from "./styled";
import productApi from "../../api/servicesApi";
export const SearchPage = () => {
    const [value, setvalue] = useState([])
    const [inp, setInp] = useState("")
    useEffect(() => {
        if (inp == "") {
            setvalue([])
            return
        }
        const getData = async () => {
            if (!inp) return
            const response = await productApi.searchRequest(inp)
            setvalue(response.data)
        }
        getData()
    }, [inp])

    return (
        <>
            
            <Breadcrumbs title={"Поиск по сайту"} />
            <MainDiv>
                <SearchInputDiv>
                    <input placeholder="Введите ваш текст" onChange={(e) => setInp(e.target.value)} />
                    <button>Найти</button>
                </SearchInputDiv>
                <CardContainer>
                    {
                        value.length > 0 ? value.map((e, i) => {
                            const { type, data } = e;

                            if (data.length > 0) {
                                if (type === "doctor") {
                                    return (
                                        <CardItem key={i}>
                                            <h3>Специалисты</h3>
                                            <FlexDiv>
                                                {data.map((el, index) => (
                                                    <Card key={el.id || index} to={`/doctors/${el._id}`}>
                                                        <img src={el.image} />
                                                        <p>{el.name}</p>
                                                    </Card>
                                                ))}
                                            </FlexDiv>

                                        </CardItem>
                                    );
                                } else if (type === "equipment") {
                                    return (
                                        <CardItem key={i}>
                                            <h3>Оборудование</h3>
                                            <FlexDiv>
                                                {data.map((el, index) => (
                                                    <Card key={el.id || index} to={`/equipments/${el._id}`}>
                                                        <img src={el.image} />
                                                        <p>{el.title}</p>
                                                    </Card>
                                                ))}
                                            </FlexDiv>

                                        </CardItem>
                                    );
                                } else if (type === "service") {
                                    return (
                                        <CardItem key={i}>
                                            <h3>Сервизи</h3>
                                            <FlexDiv>
                                                {data.map((el, index) => (
                                                    <Card key={el.id || index} to={`/${el._id}`}>
                                                        <div>
                                                            <img src={el.image} />
                                                        </div>
                                                        <p>{el.title}</p>

                                                    </Card>
                                                ))}
                                            </FlexDiv>

                                        </CardItem>
                                    );
                                } else if (type === "serviceItem") {
                                    return (
                                        <CardItem key={i}>
                                            <h3>Услуги</h3>
                                            <FlexDiv>
                                                {data.map((el, index) => (
                                                    <Card key={el.id || index} to={`/${el.serviceId}/${el._id}`}>
                                                        <img src={el.image} />
                                                        <p>{el.title}</p>
                                                    </Card>
                                                ))}
                                            </FlexDiv>

                                        </CardItem>
                                    );
                                }
                            }

                            return null;
                        }) : null
                    }
                </CardContainer>


            </MainDiv>
        </>
    )
}