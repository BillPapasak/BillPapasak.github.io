import { Grid } from "@mui/material"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NoteCategoryListItem from "./NoteCategoryListItem";
import noteCategories from "../../helpers/NoteCategories"
import CreateNoteReminder from "../CreateTodoButton/CreateNoteReminder";

const NoteCategoryList = ({ blanckPage }) => {
    
    return (

        <>
            <Grid container spacing={2} justifyContent="center" sx={{padding:"4rem"}}>
                {
                    noteCategories.map((category, index) => <NoteCategoryListItem 
                                                                key={index} 
                                                                icon={category.icon} 
                                                                description={category.type} 
                                                        />)
                }
            </Grid>
            <CreateNoteReminder blanckPage={blanckPage} />
        </>
    )
}

export default NoteCategoryList