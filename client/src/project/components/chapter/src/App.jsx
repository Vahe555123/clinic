import React , {useEffect , useState} from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { responsive } from "./data";
import productApi from "../../../api/servicesApi";
export const CarouselPage = () => {
  const [products , setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
            const response = await productApi.getEquipments();
            setProducts(response.data.data);
    };

    fetchProducts();
}, []);

  
  const product = products.length > 0 && products.map((item) => (
    <Product
      title={item.title}
      state={item.id}
      url={item.image}
      description={item.description}
      style={{ textDecoration: "none" }}
      key={item}
    />

  ));

  return (
    <div className="App">
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
