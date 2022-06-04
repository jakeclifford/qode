import React, {useState} from "react"
import Card from "../card/Card"
import Sticker from "../Sticker/Sticker"
import Inputs from "../inputs/Inputs"
import "./Main.scss"

export default function Main(props) {

    const {page, cardData, setCardData} = props

    
    return (
        <div id="main">
            <div id="cards">
                {page === "card" && <Card cardData={cardData} />}
                {page === "sticker" && <Sticker cardData={cardData} />}
            </div>
            <Inputs 
                cardData={cardData} 
                setCardData={setCardData}
                page={page}
            />
        </div>
    )
}