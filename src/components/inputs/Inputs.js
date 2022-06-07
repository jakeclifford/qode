import React, {useEffect, useState} from "react" 
import { Button, TextField, FormControl, Input, CircularProgress } from "@mui/material"
import "./Inputs.scss"
import qrPlaceholder from "../../media/qr-placeholder.svg"
import CardInputs from "../CardInputs/CardInputs"
import StickerInputs from "../StickerInputs/StickerInputs"
import { HexColorPicker } from "react-colorful";

export default function Inputs(props) {
    const {cardData, setCardData, page, fetchData, created} = props

    const [loading, setLoading] = useState(false)
    const [qrColor, setQrColor] = useState(cardData.qrColor)
    const [backgroundColor, setBackgroundColor] = useState(cardData.background)


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        setCardData({...cardData, qrCode: qrPlaceholder, qrColor: qrColor})
        if (created) {
            const elements = document.querySelectorAll('path')
            elements.forEach((userItem) => {
                userItem.style.fill = qrColor
            });
        }
    }, [qrColor]
    )

    useEffect(()=>{
        setCardData({...cardData, qrCode: qrPlaceholder, background: backgroundColor})
        if (created) {
            const elements = document.querySelectorAll('rect')
            elements.forEach((userItem) => {
                userItem.style.fill = backgroundColor
            });
        }
    }, [backgroundColor]
    )
    

    function formSubmit(e) {
        setLoading(true)
        e.preventDefault()
        fetchData()
    }

    function handleChange(e){
        setCardData({...cardData, [e.target.name]: e.target.value})
    }

    function imageUpload(e){
        const imageUrl = URL.createObjectURL(e.target.files[0])
        setCardData({...cardData, image: imageUrl})
    }

    function colorInputsAndSubmit(){
        return (
            <>  
                <div className="color-pickers">
                    <div className="color-picker">
                        <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
                        <p>Background</p>
                    </div>
                    <div className="color-picker">
                        <HexColorPicker color={qrColor} onChange={setQrColor} />
                        <p>Qr Code</p>
                    </div>
                </div>
                <Button className="Button" sx={{ mt: 1, width: "100%", background: cardData.qrColor}} variant="contained" type="submit" onClick={formSubmit}>Generate Qr Code</Button>
                {loading && <CircularProgress />}
            </>
        )
    }

    function urlInput(){
        return <TextField autoComplete='off' value={cardData.url} sx={{ my: 1, mr: 1, width: "100%" }} size="small" label="Url" variant="outlined" name="url" onChange={handleChange}/>
    }

    return (
        <>
            {page === "welcome" ? 
            <>
            {urlInput()}
            {colorInputsAndSubmit()}
            </> :
            <div id="right">
                <FormControl id="form" onSubmit={formSubmit}>
                    <div id="inputs">
                        <h2 id="username">Customize Card</h2>
                        <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="Url" variant="outlined" name="url" onChange={handleChange}/>
                        {page === "card" && <CardInputs handleChange={handleChange} imageUpload={imageUpload}/>}
                        {page === "sticker" && <StickerInputs handleChange={handleChange} />}
                        {colorInputsAndSubmit()}
                    </div>
                </FormControl>
            </div>} 
        </>
        
    )
}