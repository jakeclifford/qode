import React, {useState} from "react"
import Card from "../card/Card"
import Inputs from "../inputs/Inputs"
import qrPlaceholder from "./qr-placeholder.svg"
import userPlaceholder from "./user-placeholder.svg"
import "./Main.scss"

export default function Main(props) {
    const [cardData, setCardData] = useState({
        qrCode: qrPlaceholder, 
        username: "Username", 
        url: "", 
        image: userPlaceholder,
        background: "#85f6fa"
    })

    return (
        <div id="main">
            <div id="cards">
                <Card 
                    qrCode={cardData.qrCode} 
                    username={cardData.username} 
                    image={cardData.image} 
                    background={cardData.background}
                />
            </div>
            <Inputs 
                cardData={cardData} 
                setCardData={setCardData}
            />
        </div>
    )
}