import React from "react"
import "./Welcome.scss"
import Designs from "../Designs/Designs"
import SimpleQr from "../SimpleQr/SimpleQr"

export default function Welcome(props) {

    const {setPage, cardData, setCardData} = props

    return (
        <div id="welcome-container">
            <h1>Generate Your Qr-code</h1>
            <div id="welcome-card">
                <SimpleQr cardData={cardData} setCardData={setCardData}/>
                <p>Or add more with our Design Templates Below</p>
                <Designs setPage={setPage}/>
            </div>
        </div>
    )
}