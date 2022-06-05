import React from "react"
import Logo from "./logo.png"
import "./Header.scss"

export default function Header(props){
    return (
        <div id="navbar">
            <a onClick={() => props.setPage("welcome")}>
                <img src={Logo} id="logo"></img>
            </a>
        </div>
    )

}