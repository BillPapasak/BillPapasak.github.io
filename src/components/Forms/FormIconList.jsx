import { useState } from "react"
import { Box } from "@mui/system"
import { Icon } from "@mui/material"
import FormIcon from "./FormIcon"
import IconButton from "@mui/material/IconButton"
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from "framer-motion"

const formIconListVariants = { 

    hidden: {
        opacity:0,
        y:"-100px"
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            opacity: { duration: 0.7},
            type:"spring",
            stiffness: 100
        }
        
    },
    exit: {

        y:"-400px",
        opacity:0,
        transition: {
            type:"spring",
            stiffness: 80
        }
        
    }
    
}
const FormIconList = ({ iconList, handleTag } ) => {


    const [icons, setIcons] = useState(iconList)
    return (
            <Box
                component={motion.div}
                variants={formIconListVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                sx={{display:"flex", gap:1, flexDirection:"column", alignItems:"center", placeContent:"center"}}>
                {
                    icons.map(icon => <FormIcon 
                                        key={icon.name} 
                                        setIcons={setIcons} 
                                        icon={icon} 
                                        handleTag={handleTag}/>)
                }
            </Box>
        
    )
}

export default FormIconList