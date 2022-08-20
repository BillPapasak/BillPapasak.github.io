import Box from "@mui/system/Box"

const blanckPageStyles = {
    position:"absolute", 
    top:0, 
    width:"100%", 
    height:"100%", 
    background:"rgba(0,0,0,0.8)",
    zIndex: 3
    
}
const BlanckPage = ({ children }) => {

    return (

        <Box sx={{...blanckPageStyles}}>
            { children }
        </Box>
    )
}

export default BlanckPage