import React from "react";
import Card from "../card/Card";
import Sticker from "../Sticker/Sticker"
import "./Designs.scss"

export default function Designs(props){

    const {setPage, page, cardData} = props

    return (
        <div id="designs" style={{background: cardData.qrColor}} >
            <h3 style={{color: cardData.background}}>Edit Designs</h3>
            <a class="design" onClick={() => setPage("card")}>
                <Card cardData={cardData} page={page}/>
            </a>
            <a class="design" onClick={() => setPage("sticker")}>
                <Sticker cardData={cardData} page={page}/>
            </a>
        </div>
    )
}