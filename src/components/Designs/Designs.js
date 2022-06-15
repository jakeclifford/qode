import React from "react";
import Card from "../card/Card";
import Sticker from "../Sticker/Sticker"
import "./Designs.scss"

export default function Designs(props){

    const {setPage, page, cardData} = props

    return (
        <>
        <h3 style={{color: "black"}}>Edit Designs</h3>
        <div id="designs" >
            <div className="design">
                <a onClick={() => setPage("card")}>
                    <Card cardData={cardData} page={page}/>
                </a>
            </div>
            <div className="design">
                <a onClick={() => setPage("sticker")}>
                    <Sticker cardData={cardData} page={page}/>
                </a>
            </div>
        </div>
        </>
    )
}