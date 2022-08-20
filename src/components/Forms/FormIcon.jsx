import Icon from "@mui/material/Icon"
import { useState } from "react"

const FormIcon = ({ icon, setIcons, background="red", color="black", handleTag }) => {

    //const [active, setActive] = useState(false)

    const handleClick = (e) => {

        handleTag(e.target.outerText)
        setIcons(currentIcons => currentIcons.map(currentIcon => ({...currentIcon, active:icon.name === currentIcon.name})))

    }
    
    return (

        <Icon 
            className="form-icon"
            sx={{background, color, boxShadow:`${icon.active? `0 0 10px 2px ${color}`: null}`}}
            onClick={handleClick}> 
            { icon.name } 
        </Icon>
    )

}

export default FormIcon