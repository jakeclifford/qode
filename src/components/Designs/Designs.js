import React from "react";
import "./Designs.scss"
import Card from "../card/Card"
import Sticker from "../Sticker/Sticker"

export default function Designs(props){

    const {setPage, cardData, fetchData} = props

    return (
        <div id="designs">
            < div id="scaled">
                <a onClick={() => setPage("card")}>
                    <Card cardData={cardData} singleQr={false} fetchData={fetchData}/>
                </a>
                <a onClick={() => setPage("sticker")}>
                    <Sticker cardData={cardData} singleQr={false}/>
                </a>
            </div>
        </div>
    )
}