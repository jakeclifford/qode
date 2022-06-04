import React, {useState} from "react" 
import { Button, TextField, FormControl, Input, CircularProgress } from "@mui/material"
import "./Inputs.scss"
import qrPlaceholder from "../main/qr-placeholder.svg"

export default function Inputs(props) {
    const [loading, setLoading] = useState(false)

    const {cardData, setCardData} = props

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

    function handleColorChange(e){
        setCardData({...cardData, qrCode: qrPlaceholder, [e.target.name]: e.target.value})
    }

    function imageUpload(e){
        const imageUrl = URL.createObjectURL(e.target.files[0])
        setCardData({...cardData, image: imageUrl})
    }

    return (
        <div id="right">
            <FormControl id="form" onSubmit={formSubmit}>
                    <div id="inputs">
                        <h2 id="username">Customize Card</h2>
                        <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="Url" variant="outlined" name="url" onChange={handleChange}/>
                        <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="Username" variant="outlined" name="username" onChange={handleChange}/>  
                        <label htmlFor="contained-button-file">
                            <Input sx={{ my: 1, mr: 1 }} accept="image/*" id="contained-button-file" name="image" type="file" onChange={imageUpload} />
                        </label>
                        <div>
                            <input  id="background" type="color" name="background" value={cardData.background} onChange={handleColorChange}></input>
                            <label htmlFor="background">Background Color</label>
                        </div>
                        <div>
                            <input  id="qr-color" type="color" name="qrColor" value={cardData.qrColor} onChange={handleColorChange}></input>
                            <label htmlFor="qr-color">QR Code Color</label>
                        </div>
                        <Button className="Button" sx={{ mt: 1}} variant="contained" type="submit" onClick={formSubmit}>Create Qr Code</Button>
                        {loading && <CircularProgress />}
                    </div>
            </FormControl>
        </div>
    )
}