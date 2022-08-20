import AddIcon from '@mui/icons-material/Add';
import ToggleButton from '@mui/material/ToggleButton';
import { motion } from "framer-motion"

const variants = { 
     
    hidden: {
        opacity: 0,
        x: -10
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 6
        }
    }
}

const CreateTodoButton = ({ onClick, setShowFormSelectionList }) => (

    <ToggleButton 
            className="toggle-add-button" 
            value="add"
            component={motion.button}
            variants={variants} 
            initial="hidden"
            animate="visible"
            onClick={onClick}>
        <AddIcon sx={{color: "white"}} className="add-icon" />
    </ToggleButton>
)

export default CreateTodoButton