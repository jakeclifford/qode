import React from "react" 
import { TextField, Input } from "@mui/material"

export default function CardInputs(props){

    const { handleChange, imageUpload} = props

    return(
        <>
            <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="Username" variant="outlined" name="username" onChange={handleChange}/>  
            <label htmlFor="contained-button-file">
            <Input sx={{ my: 1, mr: 1 }} accept="image/*" id="contained-button-file" name="image" type="file" onChange={imageUpload} />
            </label>
        </>
        
    )
}
