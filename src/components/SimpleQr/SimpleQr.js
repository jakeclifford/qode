import React from "react"
import Inputs from "../inputs/Inputs"
import { CircularProgress } from "@mui/material"
import "./SimpleQr.scss"

export default function SimpleQr(props){
    const {cardData, setCardData, page} = props
    const {qrCode} = cardData

    return (
        <div id="simple-container">
            <div id="qr-holder"><h3><CircularProgress /></h3></div>
            <div id="simple-inputs">
                <Inputs cardData={cardData} setCardData={setCardData} page={page} />
            </div>
        </div>
    )
}