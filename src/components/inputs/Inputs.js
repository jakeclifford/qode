import React from "react" 
import { Button, TextField, FormControl, Input } from "@mui/material"
import "./Inputs.scss"

export default function Inputs(props) {

    const {cardData, setCardData} = props

    function formSubmit(e) {

        e.preventDefault()
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cardData.url}&bgcolor=${cardData.background.substring(1)}`)
            .then(response => {
                setCardData({...cardData, qrCode: response.url})
            })
            .catch(console.log("Request not recieved"))
    }

    function handleChange(e){
        console.log(cardData.image)
        setCardData({...cardData, [e.target.name]: e.target.value})
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
                        <TextField sx={{ my: 1, mr: 1 }} size="small" label="Url" variant="outlined" name="url" onChange={handleChange}/>
                        <TextField sx={{ my: 1, mr: 1 }} size="small" label="Username" variant="outlined" name="username" onChange={handleChange}/>  
                        <label htmlFor="contained-button-file">
                            <Input sx={{ my: 1, mr: 1 }} accept="image/*" id="contained-button-file" name="image" type="file" onChange={imageUpload} />
                        </label>
                        <input  type="color" name="background" value={cardData.background} onChange={handleChange}></input>
                        <Button className="Button" sx={{ mt: 1}} variant="contained" type="submit" onClick={formSubmit}>Create Qr Code</Button>
                    </div>
            </FormControl>
        </div>
    )
}