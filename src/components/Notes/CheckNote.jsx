import Box from "@mui/material/Box"
import DoneIcon from '@mui/icons-material/Done';

const checkNoteStylesContainer = {

    position:"absolute",
    top:0,
    left:0,
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center",
    width: "100%", 
    height: "100%", 
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: "inherit"
}

const doneIconStyles = {

   color: "green",
   transform: "scale(1.5)",
   fontWeight: "bold"
}






const CheckNote = () => (

    <Box
        sx={{...checkNoteStylesContainer}}>
        <DoneIcon sx={{...doneIconStyles}} />

    </Box>
)

export default CheckNote