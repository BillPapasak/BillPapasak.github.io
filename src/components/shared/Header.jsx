import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import purple from "@mui/material/colors/purple"
import { motion } from "framer-motion"


const headerVariants = {

    hidden: ({index}) => ({
        
        y:-10,
        opacity: 0
        
    }),

    visible: ({index, count}) => ({

        y:0,
        opacity: 1,
        color: purple[500],
        textShadow:"2px 1px 3px black",
        transition:{
            color: { delay: 2 + (index*0.10)},
            textShadow: { delay: 3.9 + (index*0.10)},
            type:"spring", 
            stiffness:130, 
            duration:0.2, 
            delay:index*0.20
        }
    })
}
const Header = ({ title, ...rest }) => {

    return (
        <Box  
            display = {{sm:"flex", justifyContent:"center",
                        md:"block"}}
            {...rest}
            >
                <Typography variant="h3"
                            
                >
                            
                    { 
                        title.split("").map((letter, index) => {

                            if (letter === " ") return (<span key={index}> </span>)
                            
                            else return (
                                <motion.span 
                                    key={index} 
                                    style={{display:"inline-block"}} 
                                    custom={{index, count:Header.length}}
                                    variants={headerVariants}
                                    initial="hidden"
                                    animate="visible"> 

                                    { letter }
                                        
                                </motion.span>
    )                       }) 
                        }
                </Typography>
            </Box>
    )
}

export default Header