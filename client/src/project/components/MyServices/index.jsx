import React, { useEffect, useState } from "react";
import { ItemsDiv, MainDiv, ServicesDiv, ServiceTitle } from "./styled";
import productApi from "../../api/servicesApi";
import { Breadcrumbs } from "../Breadcrumbs";
export const MyServices = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getAllProducts();
                setProducts(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    
    
    return (
        <>
            <MainDiv>
                <ServiceTitle>
                    Наши услуги
                </ServiceTitle>
                <ServicesDiv>
                    {products?.map((e, i) => (
                        <ItemsDiv key={e._id} img={e.image} to={`/${e._id}`}>
                            <div>{e.title}</div>
                        </ItemsDiv>
                    ))}
                    
                </ServicesDiv>

            </MainDiv>
        </>
    )
}