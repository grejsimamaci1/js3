import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


const Slider = () =>{

    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dtraditional%2Bafrican%2Bfashion&psig=AOvVaw3w71hzT-SHVPf3y9qPEmZ-&ust=1679822735259000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjCp73h9v0CFQAAAAAdAAAAABAh",
        
    ];

    const prevSlide =() =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1);
    };
    const nextSlide =() =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1);
    };
    

    return(
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]}alt="" />
                <img src={data[1]}alt="" />
                <img src={data[2]}alt="" />
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider;