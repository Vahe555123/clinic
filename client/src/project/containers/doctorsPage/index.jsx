import  { useState, useEffect } from "react";
import productApi from "../../api/servicesApi";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components";
import { ImgDiv, MainDiv, TextDiv } from "./styled";
export const DoctorsPage = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({});
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getDoctorById(id);
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <Breadcrumbs titlePart={products?.name} title={"Специалисты"} />
            <MainDiv>
                <ImgDiv>
                    <img src={products?.image} />
                </ImgDiv>
                <TextDiv>
                    {products.description}
                </TextDiv>
            </MainDiv>
        </>
    )
}