import  { useState, useEffect } from "react";
import { Departments, MainDiv, ProductsDiv, ServicesDiv, ServicesDivTitle, ShowButtons, ServicesDivTitleDark, ServicesMainDiv, ServicesItemsDiv } from "./styled";
import { Breadcrumbs, YouTubeEmbed } from "../../components";
import { useNavigate, useParams } from 'react-router-dom';
import productApi from "../../api/servicesApi";
import {useLocation} from "react-router-dom"
export const ServicesPage = () => {
    const navigate = useNavigate()
    const loc = useLocation()
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const [isScrolled, setIsScrolled] = useState(false);
    const [dep, setDep] = useState("title")
    const [productsItems, setProductsItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getProductById(id);
                const response2 = await productApi.getProductsItem();
                console.log(response.data);
                
                setProducts(response.data);
                setProductsItems(response2.data.data);
            } catch (err) {
                console.log(err);
                navigate("/")
            }
        };

        fetchProducts();
    }, [loc]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'desc') {
                        setDep('desc');
                    }
                    else if (entry.target.id === 'service') {
                        setDep('service');
                    }
                } else {
                    if (entry.target.id === 'desc' && dep === 'desc') {
                        setDep('title');
                    } else if (entry.target.id === 'service' && dep === 'service') {
                        setDep('title');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });

        const descElement = document.getElementById('desc');
        const serviceElement = document.getElementById('service');

        if (descElement) observer.observe(descElement);
        if (serviceElement) observer.observe(serviceElement);

        return () => {
            if (descElement) observer.unobserve(descElement);
            if (serviceElement) observer.unobserve(serviceElement);
        };
    }, [dep]);


    return (
        <>
            <MainDiv id="desc">
                <Breadcrumbs title={products?.title} />
                <ServicesDiv>
                    <Departments active={isScrolled}>
                        <ShowButtons href={"#desc"} dep={dep} onClick={() => setDep("desc")}>
                            Описание
                        </ShowButtons>
                        <ShowButtons href={"#service"} dep={dep} onClick={() => setDep("service")}>
                            Наши услуги
                        </ShowButtons>
                    </Departments>
                    <ProductsDiv active={isScrolled}>
                        <ServicesDivTitle >
                            {products?.title && <ServicesDivTitleDark>{products.title} - </ServicesDivTitleDark>}
                            <span>{products?.description}</span>
                        </ServicesDivTitle>
                        {products?.link && <YouTubeEmbed url={products?.link} />}

                        <ServicesMainDiv id="service">
                            {productsItems.length > 0 && productsItems.map(e => {
                                if(e.serviceId._id == products?._id){
                                    return (
                                        <>
                                            <ServicesItemsDiv src={e.image} to={`/${products?._id}/${e._id}`}>
                                                {e.title}
                                            </ServicesItemsDiv>
                                        </>
                                    )
                                }
                              
                            })}
                        </ServicesMainDiv>
                    </ProductsDiv>
                </ServicesDiv>
            </MainDiv>
        </>
    )
}