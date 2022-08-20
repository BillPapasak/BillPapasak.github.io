import { motion, AnimatePresence } from "framer-motion"
import Box from "@mui/material/Box"

const variants = { 

    hidden: {

        y:"30vh",
        x: "-50%",
        opacity: 0
    },

    visible: y => ({

        y: y ?? "25vh",
        x: "-50%",
        opacity: 1,
        zIndex: "1000",
        transition: { type: "spring", duration: 1.5,delay: .2,
                    opacity: {duration: 1.4}
                    }
    }),

    exit: {

        y: "30vh",
        opacity: 0,
        transition: { type: "spring", duration: 1}
    }

}
const AnimatedForm = ({ y, children }) => {

    return (

        <Box 
            sx={{position:"absolute", 
                top:0, left:"50%", 
                width:{xs:"90%", sm:"85%", md:"65%", lg:"50%"}, 
                height:{xs:"500px", sm:"400px"}, 
                minHeight:"400px"}}
            key="form"
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={y}
            exit="exit">
                
            { children }

        </Box>
        
        
    )
}

export default AnimatedForm