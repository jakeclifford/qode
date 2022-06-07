import React from "react"
import "./Welcome.scss"
import Designs from "../Designs/Designs"
import SimpleQr from "../SimpleQr/SimpleQr"
import Card from "../card/Card"

export default function Welcome(props) {

    const {setPage, cardData, setCardData, page} = props

    return (
        <div id="welcome-container">
            <h1 style={{color: cardData.background}}>Generate Your Qr-code</h1>
            <div id="welcome-card" style={{background: cardData.background}}>
                <SimpleQr cardData={cardData} setCardData={setCardData} page={page}/>
                <Card cardData={cardData} page={page}/>
            </div>
        </div>
    )
}