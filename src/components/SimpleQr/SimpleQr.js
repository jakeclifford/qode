import React from "react"
import Inputs from "../inputs/Inputs"
import "./SimpleQr.scss"

export default function SimpleQr(props){
    const {cardData, setCardData} = props
    const {qrCode} = cardData

    return (
        <div id="simple-container">
            <img src={qrCode}></img>
            <div id="simple-inputs">
                <Inputs cardData={cardData} setCardData={setCardData} page={"welcome"} />
            </div>
        </div>
    )
}