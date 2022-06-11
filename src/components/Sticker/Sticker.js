import "./Sticker.scss"
import React from "react"
import { CircularProgress } from "@mui/material"

export default function Sticker(props) {
    const {cardData, page} = props
    const {qrCode, background, top, bottom } = cardData

    return (
            <div className="sticker" style={{background: background}}>
                    <h2 class="text">{top}</h2> 
                    {page === "welcome" && <div id="qr-holder"></div>}
                    <div id="qr-sticker"><CircularProgress /></div> 
                    <h2 className="text">{bottom}</h2>
            </div>
    )
}