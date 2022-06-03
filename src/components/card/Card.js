import "./Card.scss"
import React from "react"

export default function UserCard(props) {
    const {qrCode, username, image, background} = props

    return (
            <div className="card" style={{background: background}}>
                <h2 className="username">{username}</h2>
                <div className="card-lower">
                    <div className="image-container">
                        {image &&<img class="user-image" src={image} alt="User"></img>}
                    </div>
                    <div className="image-container">
                        {qrCode && <img class="qr-image"src={qrCode} alt="Qr Code"></img>}
                    </div>
                </div>
            </div>
    )
}