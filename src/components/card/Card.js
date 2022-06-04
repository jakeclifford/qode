import "./Card.scss"
import React from "react"

export default function Card(props) {
    const {qrCode, username, image, background, qrColor} = props

    return (
            <div className="card" style={{background: background}}>
                <h2 style={{color: qrColor}} className="username">{username}</h2>
                <div className="card-lower">
                    <div className="image-container">
                        {image &&<img className="user-image" src={image} alt="User"></img>}
                    </div>
                    <div className="image-container">
                        {qrCode && <img className="qr-image"src={qrCode} alt="Qr Code"></img>}
                    </div>
                </div>
            </div>
    )
}