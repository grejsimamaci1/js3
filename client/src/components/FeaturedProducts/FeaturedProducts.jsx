import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://www.forevernew.co.nz/media/wysiwyg/TrendTiles-525x800-DT-02_150.jpg",
            img2: "https://media1.popsugar-assets.com/files/thumbor/p3aGcIADLrSVbcM5uPa1He-Muv0/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2023/01/11/909/n/1922564/6345bb6b63bf20e195e452.64247813_/i/best-cheap-amazon-clothes-women.png" ,
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            img2: "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://i.pinimg.com/474x/3b/6f/f4/3b6ff4604d11d9332ed07af09526c286.jpg",
            img2: "https://media.istockphoto.com/id/1399426267/photo/serious-young-mixed-race-female-posing-in-trendy-fashionable-clothing-while-sitting-on-a.jpg?b=1&s=170667a&w=0&k=20&c=pSYFj8lk1CtfDSYhf5kZOQFM3S6p023xmTVPpjCWuQQ=",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ];

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus sequi atque in earum id omnis esse debitis, accusantium adipisci obcaecati optio! Culpa, similique voluptatem! Eveniet error quaerat facilis architecto eius dolore fuga consequatur ducimus pariatur aut tempora, aspernatur similique voluptas nostrum ea quam maxime adipisci reprehenderit laboriosam? Debitis, voluptates!</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;