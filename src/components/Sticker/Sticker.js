import "./Sticker.scss"
import React from "react"
import { CircularProgress } from "@mui/material"

export default function Sticker(props) {
    const {cardData} = props
    const {qrCode, background, top, bottom } = cardData

    return (
            <div className="sticker design" style={{background: background}}>
                    <h2 className="text">{top}</h2> 
                    <div id="qr-sticker"><CircularProgress /></div>
                    <h2 className="text">{bottom}</h2>
            </div>
    )
}