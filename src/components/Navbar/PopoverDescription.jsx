import Box from "@mui/material/Box"

const popoverStyles = {
    
    position: "absolute",
    bottom: "-3.5rem",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    minWidth: "80px",
    padding: ".2rem",
    textAlign: "center",
    background: "#916c6c", 
    color: "white", 
    fontSize: "1.3rem",
    zIndex: 1000
    


}

const PopoverDescription = ({ description }) => {

    return (
        <Box
            className="popover-description"
            sx={{...popoverStyles}}
            style={{display:"none"}}>
            { description }
        </Box>
    )

}

export default PopoverDescription