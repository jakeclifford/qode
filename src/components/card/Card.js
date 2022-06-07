import "./Card.scss"
import React from "react"
import { CircularProgress } from "@mui/material"

export default function Card(props) {
    const {cardData, page} = props
    const {qrCode, username, image, background, qrColor} = cardData

    return (
            <div className="card" style={{background: background}}>
                <h2 style={{color: qrColor}} className="username">{username}</h2>
                <div className="card-lower">
                    <div className="image-container">
                        {image &&<img className="user-image" src={image} alt="User"></img>}
                    </div>
                    <div className="image-container">
                        {page === "welcome" && <div id="qr-holder"></div>}
                        <div id="qr-card"><CircularProgress /></div> 
                    </div>
                </div>
            </div>
    )
}