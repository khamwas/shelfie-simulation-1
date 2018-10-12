import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="container">
      <img
        alt={props.product.name}
        src={
          props.product.img === null || ""
            ? "https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png"
            : props.product.img
        }
      />
      <div className="textContainer">
        <h4>{props.product.name}</h4>
        <h4>Price: ${props.product.price}</h4>
        <div className="productButtonContainer">
          <button
            onClick={() => props.deleteProduct(props.product.id)}
            className="productButton"
          >
            Delete
          </button>
          <Link to={`/form/${props.product.id}`}>
            <button
              onClick={() => props.changeEditStatus(props.product)}
              className="productButton"
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
