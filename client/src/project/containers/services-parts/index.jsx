import  { useEffect, useState } from "react";
import { DepartmentsDiv, InfoLi, InfoMain, InfoParts, InfoTitle, InfoUl, MainDiv } from "./styled";
import { Breadcrumbs } from "../../components";
import productApi from "../../api/servicesApi";
import { useParams } from 'react-router-dom';

export const ServicesParts = () => {

    const { id, index } = useParams();
    const [products, setProducts] = useState({});
    const [productsTitle, setProductsTitle] = useState({});
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getProductsItemOne(index);
                const response2 = await productApi.getProductById(id);
                setProducts(response.data);
                setProductsTitle(response2.data)
            } catch (err) {
                console.log(err);

            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <MainDiv>
                <Breadcrumbs
                    title={productsTitle?.title}
                    titlePart={products?.title}
                    active={true}
                    service={products?.title}
                />
                <DepartmentsDiv>
                        {products?.descArray && products?.descArray.map((e, i) => {
                            return (
                                <InfoMain key={e + i}>
                                    <InfoParts key={e.key + i}>
                                        <InfoTitle>{e.key}</InfoTitle>
                                        <InfoUl>
                                            {e.value.map((el, j) => {
                                                return (
                                                    <span key={j}>
                                                        {e.value.length > 1 ? <InfoLi>{el}</InfoLi> : <span>{el}</span>}
                                                    </span>
                                                )
                                            })}
                                        </InfoUl>
                                    </InfoParts>
                                </InfoMain>
                            )
                        })}
                </DepartmentsDiv>
            </MainDiv>
        </>
    )
}
