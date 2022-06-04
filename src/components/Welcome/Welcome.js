import React from "react"
import "./Welcome.scss"
import Designs from "../Designs/Designs"
import example from "./example.png"

export default function Welcome(props) {

    const {setPage} = props
    return (
        <div id="welcome-container">
            <div id="welcome-card">
                <h1>Welcome</h1>
                <h3>At qode you can generate custom QR codes</h3>
                <img id="example" src={example}></img>
                <p>Choose your Design</p>
                <Designs setPage={setPage}/>
            </div>
        </div>
    )
}