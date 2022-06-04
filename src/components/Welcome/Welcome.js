import React from "react"
import "./Welcome.scss"
import Designs from "../Designs/Designs"
import SimpleQr from "../SimpleQr/SimpleQr"

export default function Welcome(props) {

    const {setPage, cardData, setCardData} = props

    return (
        <div id="welcome-container">
            <div id="welcome-card">
                <h1>Welcome</h1>
                <h4>At qode you can generate custom Color QR codes </h4>
                <SimpleQr cardData={cardData} setCardData={setCardData}/>
                <p>Or add more with our Design Templates Below</p>
                <Designs setPage={setPage}/>
            </div>
        </div>
    )
}