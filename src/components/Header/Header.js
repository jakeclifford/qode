import React from "react"
import Logo from "./logo.svg"
import "./Header.scss"

export default function Header(){
    return (
        <div id="navbar">
            <img src={Logo} id="logo"></img>
        </div>
    )

}