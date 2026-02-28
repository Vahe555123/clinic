import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "../../../assets/colors";
const ImgDiv = styled.div`
height: 400px;
width: 300px;
overflow: hidden;
display: flex;
justify-content: center;
`
const Img = styled.img`
height: 400px;
object-fit: fill;

`
export default function Product(props) {

  return (
    <div className="card">
      <Link to={`/equipments/${props.state}`} >
        <ImgDiv>
          <Img src={`http://localhost:3000/uploads/${props.url}`} alt="product image" />
        </ImgDiv>
      </Link>

      <Link to={`/equipments/${props.state}`} style={{width:"100%"}}>
        <button style={{ backgroundColor: colors.orangeColor, color: "black" }}>
          {props.title}
        </button>
      </Link>
    </div>
  );
}
