import React from "react";
import cardDesign from "./card-design.png"
import stickerDesign from "./sticker-design.svg"
import "./Designs.scss"

export default function Designs(props){

    const {setPage} = props

    return (
        <div id="designs">
            <input id="card-design" alt="card" type="image" src={cardDesign} 
            onClick={() => setPage("card")} />
            <input id="sticker-design" alt="card" type="image" src={stickerDesign} 
            onClick={() => setPage("card")} />
        </div>
    )
}