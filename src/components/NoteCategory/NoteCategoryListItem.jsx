import ToggleButton from "@mui/material/ToggleButton"
import IconButton from "@mui/material/IconButton"
import { motion } from "framer-motion"
import { useNotes } from "../../hooks/useNotes"
import { useRandomColor } from "../../hooks/useRandomColor"
import Box from "@mui/material/Box"
import "./noteCategory.css"
import { Badge, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import NoteCategoryIcon from "./NotCategoryIcon"

const buttonVariants = {

    hidden: {

    },
    visible: {

    }
}

const MyBadge = ({ children }) => {

    return (

        <Box 
            sx={{display:"flex",
                position:"absolute",
                top: "40px",
                alignItems:"center",
                backgroundColor:"#600505",
                borderRadius:"10px",
                minWidth:"20px",
                height:"20px",
                padding:"0 6px",
                placeContent:"center",
                fontSize:"1rem",
                color:"#b3a5a5",
                lineHeight: "1",
                fontWeight: "500",
                boxSizing:"border-box" }}>
            { children }
        </Box>
    )
}
const NoteCategoryListItem = ({ icon, description="Anything" }) => {

    const { color } = useRandomColor()
    const navigate = useNavigate()
    const { filteredData } = useNotes(description)

    return (
        <Grid item xs={3} md={2} 
                sx={{textAlign:"center",maxWidth:"130px", origin:"left", position:"relative"}}
                onClick={() => navigate(`/notes/${description}`)}>
            <IconButton
                    className="note-category-button" 
                    component={motion.button}
                    variants={buttonVariants} 
                    initial="hidden"
                    animate="visible"
                    sx={{color:color.icon, background:color.button}}>
                    { icon }
                    <MyBadge>{ filteredData?.length }</MyBadge>
            </IconButton>
            
            <Typography variant="h5"> { description }</Typography>
        </Grid>
        
    )
}

export default NoteCategoryListItem