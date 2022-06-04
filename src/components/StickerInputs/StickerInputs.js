import React from "react" 
import { TextField } from "@mui/material"

export default function StickerInputs(props){

    const { handleChange } = props

    return(
        <>
            <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="top" variant="outlined" name="top" onChange={handleChange}/>  
            <TextField autoComplete='off' sx={{ my: 1, mr: 1 }} size="small" label="bottom" variant="outlined" name="bottom" onChange={handleChange}/>
        </>
        
    )
}