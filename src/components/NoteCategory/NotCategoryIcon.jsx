import IconButton from "@mui/material/IconButton"
import { useRandomColor } from "../../hooks/useRandomColor"

const NoteCategoryIcon = ({ onClick, children, category }) => {

    const { color } = useRandomColor()

    return (

        <IconButton
            className="note-category-button"
            sx={{color:color.icon, background:color.button}}
            onClick={onClick}>
            
            { children??category.icon }
        
        </IconButton>
    )
    
}

export default NoteCategoryIcon