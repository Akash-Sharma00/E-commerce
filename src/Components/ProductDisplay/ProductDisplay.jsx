import React, { useContext } from "react";
import start_icon from "../Assets/star_icon.png";
import start_dull from "../Assets/star_dull_icon.png";
import './ProductDisplay.css'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-newprice">
            ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          recusandae nostrum velit in praesentium a laborum hic beatae, adipisci
          optio magnam incidunt assumenda ipsum, vitae facilis natus! Tempora,
          asperiores eaque?
        </div>
        <div className="productdisplay-right-size">
            <h1>
                    Select size
            </h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
        <p className="productdisplay-right-cat">
            <span>
                Category :
            </span>
            Women,T-shirt,Crop top
        </p>
        <p className="productdisplay-right-cat">
            <span>
                Tags :
            </span>
            Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
