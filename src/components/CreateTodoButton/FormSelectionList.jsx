import Box from "@mui/material/Box";
import NoteCategoryIcon from "../NoteCategory/NotCategoryIcon";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import noteCategories from "../../helpers/NoteCategories";
import { motion } from "framer-motion"

const formSelectionListStyles = {
    display:"flex", 
    gap:2, borderRadius:"10px", 
    margin:"0 auto", 
    padding:".45rem",
    position:"absolute",
    zIndex:"30000", 
    background:"wheat", 
    width:{xs:"300px", sm:"560px"}, 
    overflow: "auto"
}

const formSelectionListVariants = {

    hidden: {
        y:"-100px",
        left:"50%",
        x:"-50%",
        opacity: 0
    },
    visible: {

        y:"-130px",
        x:"-50%",
        left:"50%",
        opacity:1
    },
    exit: {

        y:[-170, 20],
        opacity: 0,
        
    }
}
const FormSelectionList = ({ blanckPage, setFormType, setShowForm, setShowFormSelectionList}) => {
    

    const handleClick = () => {

        setShowFormSelectionList(false)
        setShowForm(true)
        blanckPage.toggle()
        //setFormType(category.type)

    }
    return (

        <Box 
            component={motion.div}
            variants={formSelectionListVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={{...formSelectionListStyles}}>
            {
                noteCategories.map(category => <NoteCategoryIcon 
                                                    key={category.type}
                                                    onClick={handleClick}
                                                    category={category} />)
            }

        </Box>
    )
}

export default FormSelectionList