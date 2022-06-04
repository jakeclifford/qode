import React, {useEffect, useState} from "react" 
import { Button, TextField, FormControl, Input, CircularProgress } from "@mui/material"
import "./Inputs.scss"
import qrPlaceholder from "../../media/qr-placeholder.svg"
import CardInputs from "../CardInputs/CardInputs"
import StickerInputs from "../StickerInputs/StickerInputs"
import { HexColorPicker } from "react-colorful";

export default function Inputs(props) {
    const {cardData, setCardData, page} = props

    const [loading, setLoading] = useState(false)
    const [qrColor, setQrColor] = useState(cardData.qrColor)
    const [backgroundColor, setBackgroundColor] = useState(cardData.background)



    useEffect(()=>{
        setCardData({...cardData, qrCode: qrPlaceholder, qrColor: qrColor})
    }, [qrColor]
    )

    useEffect(()=>{
        setCardData({...cardData, qrCode: qrPlaceholder, background: backgroundColor})
    }, [backgroundColor]
    )

    function fetchData() {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cardData.url}&bgcolor=${cardData.background.substring(1)}&color=${cardData.qrColor.substring(1)}&format=svg`)
            .then(response => {
                setCardData({...cardData, qrCode: response.url})
                setLoading(false)
            })
            .catch(console.log("Request not recieved"))
    }
    

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
                <Button className="Button" sx={{ mt: 1}} variant="contained" type="submit" onClick={formSubmit}>Create Qr Code</Button>
                {loading && <CircularProgress />}
            </>
        )
    }

    function urlInput(){
        return <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="Url" variant="outlined" name="url" onChange={handleChange}/>
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