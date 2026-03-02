import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components";
import productApi from "../../api/servicesApi";
import {
    MainDiv, InfoDiv, Sidebar, SidebarItem, Content,
    Disclaimer, CategoryBlock, CategoryTitle, GroupTitle,
    PriceRow, ServiceName, ServiceCode, ServicePrice, MobileSelect
} from "./styled";

export const PricePage = () => {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await productApi.getPriceCategories();
                setCategories(res.data.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 250);

            categories.forEach((_, i) => {
                const el = document.getElementById(`cat-${i}`);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= -50 && rect.top <= 150) {
                        setActive(i);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories]);

    const scrollTo = (i) => {
        setActive(i);
        const el = document.getElementById(`cat-${i}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <MainDiv>
            <Breadcrumbs title="Цены на услуги" />
            <InfoDiv>
                <Sidebar $sticky={isSticky}>
                    {categories.map((cat, i) => (
                        <SidebarItem
                            key={cat._id}
                            $active={active === i}
                            onClick={() => scrollTo(i)}
                            href={`#cat-${i}`}
                        >
                            {cat.title}
                        </SidebarItem>
                    ))}
                </Sidebar>

                <Content $sticky={isSticky}>
                    <Disclaimer>
                        Уважаемые пациенты, в связи с изменениями цен у поставщиков
                        и нестабильностью курса — цены на сайте могут быть не актуальны.
                        Пожалуйста, уточняйте действующие цены по телефону или через WhatsApp.
                    </Disclaimer>

                    <MobileSelect
                        value={active}
                        onChange={(e) => scrollTo(Number(e.target.value))}
                    >
                        {categories.map((cat, i) => (
                            <option key={cat._id} value={i}>{cat.title}</option>
                        ))}
                    </MobileSelect>

                    {categories.map((cat, i) => (
                        <CategoryBlock key={cat._id} id={`cat-${i}`}>
                            <CategoryTitle>{cat.title}</CategoryTitle>
                            {cat.items?.map((item, j) => (
                                item.isGroup ? (
                                    <GroupTitle key={j} $code={item.code}>
                                        {item.name}
                                    </GroupTitle>
                                ) : (
                                    <PriceRow key={j}>
                                        <ServiceName>
                                            {item.code && <ServiceCode>{item.code}</ServiceCode>}
                                            {item.name}
                                        </ServiceName>
                                        {item.price && (
                                            <ServicePrice>{item.price} ₽</ServicePrice>
                                        )}
                                    </PriceRow>
                                )
                            ))}
                        </CategoryBlock>
                    ))}
                </Content>
            </InfoDiv>
        </MainDiv>
    );
};
