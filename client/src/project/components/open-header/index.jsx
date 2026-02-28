import React , {useState , useEffect} from "react";
import { CloseDiv, Departments, DepartmentsLink, OpenHeaderDiv } from "./styled";
import { IoMdClose } from "react-icons/io";
import { departmentsDataService } from "../../constants/arrays";
import { departmentsDataClinic } from "../../constants/arrays";
import productApi from "../../api/servicesApi";

export const OpenHeader = ({active , setActive}) => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
                const response = await productApi.getAllProducts();
                setProducts(response.data.data);
        };

        fetchProducts();
    }, []);
    console.log(products);
    
    return (
        <>
            <OpenHeaderDiv active={active}>
                <CloseDiv>
                    <span onClick={() => setActive(e => !e)}><IoMdClose /></span>
                </CloseDiv>
                <Departments>
                    <span>Наши услуги</span>
                    {products.map((e , i) => {
                        return(
                            <DepartmentsLink onClick={() => setActive(false)} key={e + i} to={e._id}>{e.title}</DepartmentsLink>
                        )
                    })}


                </Departments>
                <Departments>
                    <span>Наши услуги</span>
                    {departmentsDataClinic.map((e , i) => {
                        return(
                            <DepartmentsLink onClick={() => setActive(false)} key={e + i} to={e.to}>{e.title}</DepartmentsLink>
                        )
                    })}


                </Departments>
            </OpenHeaderDiv>
        </>
    )
}