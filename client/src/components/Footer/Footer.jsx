import React from "react";
import "./Footer.scss";

const Footer = () =>{
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1><br/>
                    <span>Women</span><br/>
                    <span>Men</span><br/>
                    <span>Shoes</span><br/>
                    <span>Accessories</span><br/>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1><br/>
                    <span>FAQ</span><br/>
                    <span>Pages</span><br/>
                    <span>Store</span><br/>
                    <span>Compare</span><br/>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellat fugit voluptatum fugiat necessitatibus inventore cumque explicabo labore, quae, magnam, dolore praesentium et voluptate ab perspiciatis architecto quibusdam quidem adipisci
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti iste optio, voluptas officia doloribus. Exercitationem earum esse nulla sit tempora, commodi dolore alias incidunt aperiam et aliquid, ipsa reiciendis?
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Mad Colors</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment-img.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;