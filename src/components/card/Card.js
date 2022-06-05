import "./Card.scss"
import React from "react"

export default function Card(props) {
    const {cardData} = props
    const {qrCode, username, image, background, qrColor} = cardData

    return (
            <div className="card" style={{background: background}}>
                <h2 style={{color: qrColor}} className="username">{username}</h2>
                <div className="card-lower">
                    <div className="image-container">
                        {image &&<img className="user-image" src={image} alt="User"></img>}
                    </div>
                    <div className="image-container">
                        <div id="qr-holder"></div>
                    </div>
                </div>
            </div>
    )
}