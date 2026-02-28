import { useEffect, useState } from "react";
import { Departments, DepartmentsItems, InfoDiv, MainDiv, ServicesDiv, ServicesInfo, ServicesTitle, ServicesDesc, ServicesItems, ServicesItemsTitle, ServicesItemsTitleLink, ShowTetx, ItemsDiv,  PriceDiv,  PriceLeftPart, PriceCode, PriceNum, PriceLine, PriceParts } from "./styled";
import { Breadcrumbs } from "../../components";
import productApi from "../../api/servicesApi";

export const PricePage = () => {
    const [products, setProducts] = useState([]);
    const [productsItems, setProductsItems] = useState([]);
    const [active, setActive] = useState(0);
    const [showPrice, setShowPrice] = useState();
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getAllProducts();
                const response2 = await productApi.getProductsItem();
                setProducts(response.data.data);
                setProductsItems(response2.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
    
            products.forEach((_, index) => {
                const section = document.getElementById(`${index}`);
                if (section) {
                    const rect = section.getBoundingClientRect();
    
                    // Проверяем, находится ли раздел в верхней части окна
                    const isAtTop = rect.top >= -10 && rect.top <= 10; // Допустимая погрешность ±10 пикселей
                    if (isAtTop) {
                        setActive(index);
                    }
                }
            });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [products]);
    
    const showPriceFun = (index) => {
        if (index == showPrice) {
            setShowPrice(null)
        } else {
            setShowPrice(index)
            
        }
   
    }
    const changeDep = (i) => {
        setActive(i);
        document.getElementById(`${i}`).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <MainDiv>
            <Breadcrumbs title={"Цены на услуги"} />
            <InfoDiv>
                <Departments active={isScrolled}>
                    {products?.map((e, i) => (
                        <DepartmentsItems
                            key={e._id}
                            onClick={() => changeDep(i)}
                            active={active == i}
                            href={`#${i}`}
                        >
                            {e.title}
                        </DepartmentsItems>
                    ))}
                </Departments>
                <ServicesDiv active={isScrolled}>
                    <ServicesDesc>
                        Уважаемые пациенты, в связи с изменениями цен у поставщиков,
                        нестабильностью курса – на нашем сайте информация о ценах может быть не актуальна.
                        Пожалуйста уточняйте действующие цены по телефону или через WhatsApp.
                    </ServicesDesc>
                    <ServicesInfo>
                        {products?.map((e, i) => (
                            <ServicesTitle key={e._id} id={i}>
                                {e.title}
                                <ServicesItems>
                                    {productsItems.map((el, index) => (
                                        el.serviceId._id === e._id && (
                                            <ServicesItemsTitle key={el._id}>
                                                <ItemsDiv>
                                                    <ServicesItemsTitleLink to={`/${e._id}/${el._id}`}>
                                                        {el.title}
                                                    </ServicesItemsTitleLink>
                                                    <ShowTetx onClick={() => showPriceFun(index)}>
                                                        Показать
                                                    </ShowTetx>
                                                </ItemsDiv>
                                                {index == showPrice &&
                                                    el?.price && el.price.map((e, i) => {
                                                        return (
                                                            <PriceDiv key={e + i}>
                                                                {e.value.map((el, index) => {
                                                                    let num = el.priceService.split("")
                                                                    num[num.length - 4] = num[num.length - 4] + " "
                                                                    el.priceService = num.join("")
                                                                    return (
                                                                        <PriceParts key={el + index}>
                                                                            <PriceLeftPart>
                                                                                <div>
                                                                                    <strong>{e.title} </strong>{el.priceServiceTitle}
                                                                                </div>
                                                                                <PriceCode>КОД: {el.codePrice} </PriceCode>
                                                                            </PriceLeftPart>
                                                                            <PriceLine />
                                                                            <PriceNum>
                                                                                {el.priceService} ₽
                                                                            </PriceNum>
                                                                        </PriceParts>

                                                                    )
                                                                })}
                                                            </PriceDiv>

                                                        )

                                                    })
                                                }
                                            </ServicesItemsTitle>
                                        )
                                    ))}
                                </ServicesItems>
                            </ServicesTitle>
                        ))}
                    </ServicesInfo>
                </ServicesDiv>
            </InfoDiv>
        </MainDiv>
    );
};
