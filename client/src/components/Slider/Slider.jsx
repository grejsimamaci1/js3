import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


const Slider = () =>{

    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
        // "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        // "https:////images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // "https://i0.wp.com/1.bp.blogspot.com/-ucVL77xIkEY/X-BBSqbLNDI/AAAAAAAHcyA/AgEAuYpbcyMrr732KS8sG7WFcN5XnJ0jgCLcBGAsYHQ/s1600/MAD_branding_2.jpg?ssl=1",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d067c14736263.56288430c4641.jpg",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
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