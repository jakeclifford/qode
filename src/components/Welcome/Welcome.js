import React from "react"
import "./Welcome.scss"
import Designs from "../Designs/Designs"
import SimpleQr from "../SimpleQr/SimpleQr"

export default function Welcome(props) {

    const {setPage, cardData, setCardData, page} = props

    return (
        <div id="welcome-container">
            <h1 style={{color: cardData.background}}>Generate Your Qr-code</h1>
            <div id="welcome-card" >
                <SimpleQr cardData={cardData} setCardData={setCardData} page={page}/>
                <Designs cardData={cardData} page={page} setPage={setPage}/>
            </div>
        </div>
    )
}