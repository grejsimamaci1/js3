import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () =>{
    const [selectImg, setSelectedImg]= useState(0);
    const [quantity, setquantity]= useState(1);

    const images = [
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" />
                </div>
                <div className="mainImg">
                    <img src={images[selectImg]} alt="" onClick={e => setSelectedImg(1)}/>
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate magnam harum architecto asperiores commodi dolorum, esse optio, minima sapiente ut dolore consequatur minus nulla eius repellat eum molestias amet atque.</p>
                <div className="quantity">
                    <button onClick={()=> setquantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                    <button onClick={()=> setquantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/>ADD TO COMPARE
                    </div>
                    <div className="info">
                        <span>Vendor: Polo</span>
                        <span>Product Type: T-shirt</span>
                        <span>Tag: T-Shirt, Women, Top</span>
                    </div>
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;