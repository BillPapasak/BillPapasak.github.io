import Box from "@mui/system/Box"

const styles = { 
    position: "absolute",
    padding: "1rem",
    textAlign: "center",
    top: "85%",
    left: "50%",
    minWidth: "200px",
    transform: "translate(-50%, -50%)", 
    zIndex: 100
}

const CentralizedBox = ({ children, style }) => {

    const sx = style ? {...styles, ...style} : styles

    return (

        <Box sx={sx}>
            { children }
        </Box>
    )
}

export default CentralizedBox