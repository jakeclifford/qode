import "./Sticker.scss"
import React from "react"

export default function Sticker(props) {
    const {cardData} = props
    const {qrCode, background, top, bottom } = cardData

    return (
            <div className="sticker" style={{background: background}}>
                    <h2 class="text">{top}</h2> 
                    <div id="qr-holder"></div>
                    <h2 class="text">{bottom}</h2>
            </div>
    )
}