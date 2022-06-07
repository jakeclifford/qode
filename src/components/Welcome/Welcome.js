import React from "react"
import "./Welcome.scss"
import Designs from "../Designs/Designs"
import SimpleQr from "../SimpleQr/SimpleQr"

export default function Welcome(props) {

    const {setPage, cardData, setCardData, fetchData} = props

    return (
        <div id="welcome-container">
            <h1 style={{color: cardData.background}}>Generate Your Qr-code</h1>
            <div id="welcome-card" style={{background: cardData.background}}>
                <SimpleQr cardData={cardData} setCardData={setCardData} fetchData={fetchData}/>
                <Designs cardData={cardData} setPage={setPage} fetchData={fetchData}/>
            </div>
        </div>
    )
}