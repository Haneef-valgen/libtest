import React from 'react'
import { Button as MuiButton,
    ButtonProps as MuiButtonProps
} from '@mui/material'


interface ButtonProps extends MuiButtonProps{

}//Add custom props


const MuiBtn:React.FC<ButtonProps>=({children,...rest})=>{


    return(
        <MuiButton {...rest}>{children}</MuiButton>
    )
}


export default MuiBtn