import React from "react";
import Card from "../card/Card";
import "./Designs.scss"

export default function Designs(props){

    const {setPage, page, cardData} = props

    return (
        <div id="designs" >
            <a onClick={() => setPage("card")}>
                <Card cardData={cardData} page={page}/>
            </a>
        </div>
    )
}